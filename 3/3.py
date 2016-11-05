from euler import primesTo


n = 600851475143
limit = n ** 0.5
primes = primesTo(limit)

# Brute force
# for i in range(len(primes) - 1, -1, -1):
#     if 600851475143 % primes[i] == 0:
#         print primes[i]
#         break 


# Smarter algorithm
# Keep finding largest factor until it is prime
for i in range(len(primes)):
    if n % primes[i] == 0:
        n /= primes[i]
    if n in primes:
        print n
        break
    else: 
        i = 0 