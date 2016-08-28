max = 0
ans = 0
(2..1000).each do |i|
	j = 1
	while(((10**j) - 1) % i != 0) do
		j+=1
		break if j == i
	end
	next if j == i
	if j > max 
		max = j
		ans = i
	end
end

puts ans