
def factorial(x) 
  return x == 0 ? 1 : x * factorial(x - 1)
end

def combination(x, y) 
  factorial(x) / (factorial(y) * factorial(x - y))
end


n = 0
2.upto(30) do |i|
	n += (combination(30, i) * (2 ** (30 - i)))
end

1.upto(26) do |i|
	n += (28 * 27 * combination(26, i))
end

1.upto(27) do |i|
	n += (28 * combination(27, i))
end

puts 3 ** 30
puts n