n_digits = []
(1..100).each do |i|
  (1..100).each do |j|
    power = i ** j
    if power.to_s.length == j && !n_digits.include?(power)
      n_digits.push(power)
    end
  end
end

puts n_digits.length
