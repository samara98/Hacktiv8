function cariPelaku(str) {
    // you can only write your code here!
    let sum = 0;
    for (let i = 0; i < str.length - 2; i++) {
        const char = str[i] + str[i+1] + str[i+2];
        if (/abc/.test(char)) {
            sum += 1;
        }
    }
    return sum;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2