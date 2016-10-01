pn2 = 2
pn1 = 3
a = 2
n = 0

98.times do |i|
  if(i % 3 === 0)
    n = a * pn1 + pn2
    a += 2
  else
    n = pn2 + pn1
  end
  pn2 = pn1
  pn1 = n
end

puts n
n = n.to_s.chars.map(&:to_i).inject(0, :+)
puts n
