ans = 0
(2..333_333_333).each do |i|
  [-1,1].each do |j|
    temp = ((3.0*i + j) * (i*1.0 - j)) ** (0.5);
    if temp % 1 == 0
      ans += 3*i + j
      puts i
    end
  end
end

puts ans
