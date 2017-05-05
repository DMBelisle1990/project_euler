from operator import mul

def rad(n):
    i = 2
    factors = []
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
            factors.append(i)
    if n > 1:
        factors.append(n)
    return reduce(mul, list(set(factors)), 1)
    
            
rads = []
for x in range(1, 100001):
    rad_x = rad(x)
    rads.append({
        'x': x,
        'rad_x': rad_x
    })

rads = sorted(rads, key=lambda k: k['rad_x']) 
print rads[9999]