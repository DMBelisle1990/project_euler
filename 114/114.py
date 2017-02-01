combinations = [0, 0, 0, 1]

for length in range(4, 51):
  total = combinations[length - 1] + (length - 2) # num ways with a red on far left block
  for subLength in range(3, length):
    total += combinations[length - (subLength + 1)]
  combinations.append(total)

combinations = [x + 1 for x in combinations] # add on all black cases
print combinations[50]