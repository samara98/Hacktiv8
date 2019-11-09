function fpb(angka1, angka2) {
    // you can only write your code here!
    let max, min;

    if (angka1 > angka2) {
        max = angka1;
        min = angka2
    }
    else {
        max = angka2;
        min = angka1
    }
    
    return (max % min === 0) ? min : fpb(min, (max % min));
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1