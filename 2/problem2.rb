fib_seq = [1,2]
i = 1
sum = 2

while fib_seq[i] < 4000000 do
	fib_seq << fib_seq[i] + fib_seq[i-1]
	sum += fib_seq[i+1] if fib_seq[i+1] % 2 == 0
	i += 1
end

puts sum