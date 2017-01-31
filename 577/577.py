triNums = [(n * (n + 1)) / 2 for n in range(12344)]
ans = s = sum(triNums)
m = 2

while len(triNums) > 0:
  s -= sum(triNums[-3:])
  triNums = triNums[:-3 or None]
  ans += (s * m)
  m += 1

print ans