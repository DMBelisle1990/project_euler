# Uses the recursive pattern:
# 	d(n) = 2*d(n-1) + d(n-2)
# 	n(n) = d(n-1)
#
# The numbers even when reduced become larger than JS can reliably deal with
# so ruby was used to avoid a big num library

d1 = 2
d2 = 5
ans = 0

998.times do |i|
	n = d2
	d = 2 * d2 + d1
  ans += 1 if (n+d).to_s.length > d.to_s.length
	d1 = d2
	d2 = d
end

puts ans
