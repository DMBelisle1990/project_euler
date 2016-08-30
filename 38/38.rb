(9000..9999).each do |i|
	product = (1*i).to_s + (2*i).to_s
	puts product if(product.split("").uniq().length == 9)
end