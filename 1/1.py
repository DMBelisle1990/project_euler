# Learning Python so multiple solutions will be provided

# Basic way of solving
ans = 0
for i in range(1, 1000):
    if i % 3 == 0 or i % 5 == 0:
        ans += i

print ans 


# Solution using list comprehension
print sum([x for x in range(1,1000) if x % 3 == 0 or x % 5 == 0])
