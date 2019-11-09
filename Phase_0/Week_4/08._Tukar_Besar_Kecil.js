function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    let result = "";
    for (let i = 0; i < kalimat.length; i++) {
        switch (true) {
            case ((kalimat[i] >= "A") && (kalimat[i] <= "Z")):
                result += kalimat[i].toLowerCase();
                break;
            case ((kalimat[i] >= "a") && (kalimat[i] <= "z")):
                result += kalimat[i].toUpperCase();
                break;
            default:
                result += kalimat[i];
                break;
        }
    }
    return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"