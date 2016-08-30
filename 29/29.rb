require 'set'

seq = Set.new
for a in 2..100
	for b in 2..100
		seq.add(a**b)
	end
end

puts seq.length