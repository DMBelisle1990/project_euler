max = 0
sum = 0
(1...100).each do |a|
	(1...100).each do |b|
		temp = (a**b).to_s.split("")
		sum = 0
		temp.each { |i| sum += i.to_i }
		max = sum if sum > max
	end

end

puts max