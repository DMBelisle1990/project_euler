# Straightforward application of inclusion/exclusion principle
ans = 0
(3..16).each do |k|
	ans += (15 * 16**(k-1)) # Total valid numbers
	ans -= (2*14*15**(k-1)) # Minus all nums not containing A or 1
	ans -= (15**k) # Minus all nums not containing 0
	ans += (2*14**k) # Add back on all numbers not containing a 0 and an (A or 1)
	ans += (13*14**(k-1)) # Add back on all numbers not containing an A and 1
	ans -= 13**k # Minus all nums not containing all 3
end

# print ans in base 16
puts ans.to_s(16)