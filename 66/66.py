def pell(d):
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
    return x

ans = 1
for x in range(2, 1000):
    if pell(x) > ans:
        ans = pell(x)
        print x
