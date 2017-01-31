def inRange(n):
  return n > 999 and n < 10000

triNums  = [ int(n*(n+1)/2) for n in range(1, 200) if inRange(int(n*(n+1)/2)) ]
sqNums   = [ n*n for n in range(1, 200) if inRange(n*n) ]
pentNums = [ int(n*(3*n-1)/2) for n in range(1, 200) if inRange(int(n*(3*n-1)/2)) ]
hexNums  = [ n*(2*n-1) for n in range(1, 200) if inRange(n*(2*n-1)) ]
heptNums = [ int(n*(5*n-3)/2) for n in range(1, 200) if inRange(int(n*(5*n-3)/2)) ]
octNums  = [ n*(3*n-2) for n in range(1, 200) if inRange(n*(3*n-2)) ]

print(octNums)

