// 1. Let's Form a Sentence
console.log("1. =====");

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

var words = word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh;
console.log(words);


// 2. Index Accessing - 1 by 1
console.log("2. =====");

var word2 = 'wow JavaScript is so cool';
var exampleFirstWord2 = word2[0] + word2[1] + word2[2];
var secondWord2 = word2.slice(4, 14);
var thirdWord2 = word2.slice(15, 17);
var fourthWord2 = word2.slice(18, 20);
var fifthWord2 = word2.slice(21);

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);


// 3. Breaking Sentence (Again) using Substring
console.log("3. =====");

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17);
var fourthWord3 = word3.substring(18, 20);
var fifthWord3 = word3.substring(21);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);


// 4. Breaking Sentence (yet Again) and Count Each Length
console.log("4. =====");

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substr(0, 3);
var secondWord4 = word3.substr(4, 10);
var thirdWord4 = word3.substr(15, 2);
var fourthWord4 = word3.substr(18, 2);
var fifthWord4 = word3.substr(21);

var firstWord4Length = exampleFirstWord4.length;
var secondWord4Length = secondWord4.length;
var thirdWord4Length = thirdWord4.length;
var fourthWord4Length = fourthWord4.length;
var fifthWord4Length = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWord4Length);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWord4.length);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWord4.length);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWord4.length);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWord4.length);
