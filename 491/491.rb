def factorial(n)
	return 1 if n == 0
	return n * factorial(n-1)
end

# Don't count possibilities in pos where 0 is in front
neg = [0,1,2,3,4,5,6,7,8,9]
pos = [0,1,2,3,4,5,6,7,8,9]
pos_sub = [], temp_pos = []
neg_sub = [], temp_neg = []

count = 0 
# Iterate over unique subsets of each array from sizes 1 - 10
(1..10).each do |i|
	pos_sub = pos.combination(i).to_a.uniq
	neg_sub = neg.combination(i).to_a.uniq

	# Can only swap subsets of equal size
	pos_sub.each do |j|
		neg_sub.each do |k|
			# Add the new subset to each array
			temp_neg = (neg.dup + j)
			temp_pos = (pos.dup + k)

			# Remove the old subset from each array
			j.each {|num| temp_pos.delete_at(temp_pos.index(num) || temp_pos.length)}
			k.each {|num| temp_neg.delete_at(temp_neg.index(num) || temp_neg.length)}

			# Calculate the sum
			sum = temp_pos.inject(0, :+) - temp_neg.inject(0, :+)
			count += 1 if sum%11 == 0 
		end
	end
end


puts (count * 8 * factorial(9) * factorial(10)) / (2**10)



