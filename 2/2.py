ans = 0
f1 = 1
f2 = 1
while f2 <= 4000000:
    temp = f2
    f2 += f1
    f1 = temp 
    if f2 % 2 == 0:
        ans += f2

print ans