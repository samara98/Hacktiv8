function angkaPalindrome(num) {
    // you can only write your code here!
    let counter = false
    while (counter === false){
        num += 1;
        if ((num >= 0) && (num <= 9)) {
            counter = true;
        }
        else {
            let temp = num;
            let newNum = 0;
            while (temp != 0) {
                newNum = (newNum * 10) + (temp % 10);
                // console.log(`${temp}, ${newNum}`);
                temp = Math.trunc(temp / 10);
            }
            counter = ((newNum === num) ? true : false);
        }
    }
    return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001