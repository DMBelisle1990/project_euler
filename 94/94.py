# var ans = 0;
# for(var i = 2; i < 333333334; i++) {
#   for(var j = -1; j < 2; j+=2) {
#     var temp = Math.sqrt((3*i + j)) * Math.sqrt((i - j));
#     temp *= (i - j)/4;
#     if(temp % 1 === 0) {
#       ans += 3*i + j;

#     }
#   }
# }

# console.log(ans);


ans = 0
for i in range(2, 333333334):
    for j in range(-1, 2, 2):
        temp = (((3*i + j)*(i - j))**(0.5)) * ((i - j) / 4)
        if float(temp).is_integer():
            ans += 3*i + j


print ans