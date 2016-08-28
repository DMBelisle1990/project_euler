require 'matrix'

# Solved this using a Markov Chain but there are very simple solutions to this problem
# Used it more as an opportunity to learn how to use Markov Chains
s1 = Matrix[[1.0,0,0,0,0,0,0]]
(1..19).each do |i|
	transition = Matrix[[(10.0-i)/(70-i),60/(70.0-i),0,0,0,0,0],
						[0,(20.0-i)/(70-i),50/(70.0-i),0,0,0,0],
						[0,0,(30.0-i)/(70-i),40/(70.0-i),0,0,0],
						[0,0,0,(40.0-i)/(70-i),30/(70.0-i),0,0],
						[0,0,0,0,(50.0-i)/(70-i),20/(70.0-i),0],
						[0,0,0,0,0,(60.0-i)/(70-i),10/(70.0-i)],
						[0,0,0,0,0,0,1.0]]
	s1 *= transition
end

# Calculate the expectation here
counter = 1
ans = 0
s1.each do |i|
	ans += (counter*i)
	counter += 1
end

puts ans

