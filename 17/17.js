var ones = ['one','two','three','four','five','six','seven','eight','nine'];
var teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

var teensLength = 0, //good
	onesLength = 0,
	andLength = 0, //good
	tensLength = 0,
	thousandLength = 0, //good
	hundredsLength = 0; //good

for(var i = 0; i < teens.length; i++) 
	teensLength += teens[i].length;

teensLength *= 10;

for(var i = 0; i < ones.length; i++)
	onesLength += ones[i].length;

onesLength *= 90;

andLength = 3 * 891;

for(var i = 0; i < tens.length; i++) 
	tensLength += tens[i].length;

tensLength *= 100;

thousandLength = 3 + 'thousand'.length;

for(var i = 0; i < ones.length; i++) 
	hundredsLength += ones[i].length * 100;

hundredsLength += 'hundred'.length * 900;
console.log(teensLength);
console.log(onesLength);
console.log(andLength);
console.log(tensLength);
console.log(thousandLength);
console.log(hundredsLength);

console.log(teensLength + onesLength + andLength + tensLength + thousandLength + hundredsLength);