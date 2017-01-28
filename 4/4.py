def palindrome_product():
    for i in range(999, 100, -1):
        for j in range(999, 100, -1):
            if str(i * j) == str(i * j)[::-1]:
                return i * j            
            

print palindrome_product()