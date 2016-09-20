start = (1020304050607080900**0.5).floor
stop  = (1929394959697989999**0.5).floor
(start..stop).step(10) do |i|
	# temp = (i * i).to_s.split('')
	# temp = temp.values_at(* temp.each_index.select {|i| i.even?})
	# if temp.join('') == '1234567890'
	# 	puts i
	# 	break
	# end
	# puts i
end
puts 'done'