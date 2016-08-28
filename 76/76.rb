def factorial(num) 
	return 1 if num == 0
	return num*factorial(num-1)
end

def c(x,y)
	return factorial(x)/(factorial(y)*factorial(x-y))
end


# ans = 0
# (1..99).each do |i|
# 	ans += (c(100,i)/(1.0*c(99,i))).floor
# end

# puts ans


