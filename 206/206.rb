# Straight forward brute force 
start = (1020304050607080900**0.5).floor
stop  = (1929394959697989999**0.5).floor
(start..stop).step(10) do |i|
	temp = (i * i).to_s
	found = true
	9.times do |j|
		if temp[2*j..2*j].to_i != j+1
			found = false
			break
		end
	end
	if found
		puts i
		break
	end
end
