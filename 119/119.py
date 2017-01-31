MAX = 450359962737049 # a_30 is most likely less than this
MAX_BASE = 130
powers = []

def digitSum(n):
  total = 0
  while n >= 1:
      total += (n % 10)
      n = n // 10
  return total

for base in range(2, MAX_BASE):
  exp = 2
  while base ** exp < MAX:
    if base == digitSum(base ** exp):
      powers.append(base ** exp)
    exp += 1

powers = sorted(powers)
print powers[29]