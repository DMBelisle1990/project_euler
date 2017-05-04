from decimal import *

getcontext().prec = 102
ans = 0

for i in range(2, 101):
  digits = str(Decimal(i).sqrt()).replace('.', '')[:-2] #truncate instead of round
  if len(digits) < 3:
    continue

  print(len(digits))
  ans += sum(map(int, list(digits)))

print ans