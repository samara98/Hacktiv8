function checkAB(num) {
    // you can only write your code here!
    for (let i = 0; i < num.length - 4; i++) {
        if (((num[i].toLowerCase() === "a") && (num[i+4].toLowerCase() === "b")) || ((num[i].toLowerCase() === "b") && (num[i+4].toLowerCase() === "a"))) {
            return true;
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false