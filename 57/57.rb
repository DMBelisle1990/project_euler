nk = 3.0
dk = 2.0

1000.times do
	nk += 2*dk
	dk = nk - dk
	puts nk
end