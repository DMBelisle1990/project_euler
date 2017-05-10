# 1502 IS THE MAX NUMBER OF CONSECUTIVE INTEGERS THAT CAN BE 47-SMOOTH
# SEE Stormer's theorem
#
# BETTER
# 1. Calculate all possible q != 2 in x^2 - 2qy^2 by taking products of all subsets 
#    of primes to obtain all possible Pell Equations
# 2. For each Pell Equation find the first (47 + 1) / 2 solutions and use the 24 x's 
#    found to test for smooth consecutive pairs

from itertools import chain, combinations
from operator import mul

def powerset(iterable):
    """ Returns the powerset of set """
    xs = list(iterable)
    return chain.from_iterable(combinations(xs,n) for n in range(len(xs)+1))

prime_sets = powerset([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47])
q = [reduce(mul, s, 1) for s in prime_sets]
q.remove(2)

def pell(d):
    """ Returns fundamental solution (x1,y1) for pell equation with nonsquare d """
    p, k, x1, y, sd = 1, 1, 1, 0, d ** 0.5
    if sd == int(sd):
        return 0
    while k != 1 or y == 0:
        p = k * (p/k+1) - p
        p = p - int((p - sd)/k) * k
 
        x = (p*x1 + d*y) / abs(k)
        y = (p*y + x1) / abs(k)
        k = (p*p - d) / k
        x1 = x
    return x, y

print pell(109)
     