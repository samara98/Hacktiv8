function palindrome(kata) {
    // you can only write your code here!
    let kataBaru = "";
    for (let i = kata.length - 1; i >= 0; i--) {
        kataBaru += kata[i];
    }
    if (kataBaru === kata) {
        return true;
    }
    return false;
}
  
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false