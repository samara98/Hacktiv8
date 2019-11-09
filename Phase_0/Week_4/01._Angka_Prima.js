function angkaPrima(angka) {
    // you can only write your code here!
    for (let n = 2; n <= Math.trunc(Math.sqrt(angka)); n++) {
        if (angka % n === 0) {
            return false;
        }
    }
    return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false