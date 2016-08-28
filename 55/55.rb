lychrelCount = 0
lychrel = true
(11..9999).each do |i|
	sum = i
	lychrel = true
	49.times do |j|
		sum += ((sum.to_s).split("").reverse.join("").to_i)
		if sum == (sum.to_s).split("").reverse.join("").to_i 
			lychrel = false
			break
		end
	end
	lychrelCount += 1 if lychrel
end

puts lychrelCount