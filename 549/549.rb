ans = 0

for i in 2..10000000
	n = 2
	n_fact = 2
	while n_fact % i != 0
		n_fact *= (n + 1)
		n += 1
	end

	ans += n
	puts i
end
