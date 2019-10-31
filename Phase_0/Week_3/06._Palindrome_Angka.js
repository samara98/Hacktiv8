function angkaPalindrome(num) {
    // you can only write your code here!
    let stop = false
    while (!stop){
        num += 1;
        let temp = num;
        let newNum = 0;
        while (temp != 0) {
            newNum = (newNum * 10) + (temp % 10);
            temp = Math.trunc(temp / 10);
        }
        stop = ((newNum === num) ? true : false);
    }
    return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001