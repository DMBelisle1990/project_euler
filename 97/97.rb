# Ruby is somewhat cheating here
# Rather than modulo at the end, we can square 2 7830457 times and mod 10^10 it at each iteration
# Then at the end multiply the constant, add 1, the mod it one last time
# -----------
# Basically just do all the calculations mod 10^10

bigNum = (28433*(2**7830457)) + 1
puts bigNum % (10**10)