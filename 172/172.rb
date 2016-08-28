def fac(n)
	return (1..n).inject(:*)
end

def c(n,k)
	return fac(n) / (fac(k)*fac(n-k))
end

answer = 0

# 6 digits
answer += c(10,6) * (fac(18) / (fac(3)**6))
answer -= c(9,5) * (fac(17) / (fac(3)**6))

# 7 digits
answer += c(10,7) * ((7*6*fac(18) / ((fac(3)**5)*2)) + (c(7,3)*fac(18) / ((fac(3)**4)*8)))
answer -= c(9,6) * ((fac(17) / ((fac(3)**5)*2)) + (fac(17) / ((fac(3)**4)*8)))


# 8 digits
answer += c(10,8) * ((fac(18) / ((fac(3)**5))) + (fac(18) / ((fac(3)**4)*4)) + (fac(18) / ((fac(3)**3)*16)) + (fac(18) / ((fac(3)**2)*64)))
answer -= c(9,7) * ((fac(17) / ((fac(3)**5))) + (fac(17) / ((fac(3)**4)*4)) + (fac(17) / ((fac(3)**3)*16)) + (fac(17) / ((fac(3)**2)*64)))

# 9 digits
answer += c(10,9) * ((fac(18) / ((fac(3)**4)*2)) + (fac(18) / ((fac(3)**3)*8)) + (fac(18) / ((fac(3)**2)*32)) + (fac(18) / ((fac(3))*128)) + (fac(18) / 512))
answer -= c(9,8) * ((fac(17) / ((fac(3)**4)*2)) + (fac(17) / ((fac(3)**3)*8)) + (fac(17) / ((fac(3)**2)*32)) + (fac(17) / ((fac(3))*128)) + (fac(17) / 512))

# 10 digits
answer += ((fac(18) / ((fac(3)**4))) + (fac(18) / ((fac(3)**3)*4)) + (fac(18) / ((fac(3)**2)*16)) + (fac(18) / ((fac(3))*64)) + (fac(18) / 256))
answer -= ((fac(17) / ((fac(3)**4))) + (fac(17) / ((fac(3)**3)*4)) + (fac(17) / ((fac(3)**2)*16)) + (fac(17) / ((fac(3))*64)) + (fac(17) / 256))
puts answer

