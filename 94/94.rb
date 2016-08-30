# ans = 0
# count = 0
# p = 0
# (2..3_333_333).each do |i|
# 	p = (3*i + 1)/2
# 	if(Math.sqrt( p*2*(p-i)*(p-i-1) )%1 == 0) 
# 		ans += (2*p)
# 	end
# 	p = (3*i - 1)/2
# 	if(Math.sqrt( p*2*(p-i)*(p-i+1) )%1 == 0) 
# 		ans += (2*p)
# 	end
# end

# puts ans

(2..333_333_333).each do |i|

end

puts "done"