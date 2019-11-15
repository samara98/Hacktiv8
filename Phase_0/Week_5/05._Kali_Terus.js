function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (angka < 10) {
        return angka;
    }
    else {
        let sum = 1;
        while (angka != 0) {
            sum *= (angka % 10);
            angka = Math.trunc(angka / 10);
        }
        return kaliTerusRekursif(sum);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6