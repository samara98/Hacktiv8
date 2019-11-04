function ubahHuruf(kata) {
    // you can only write your code here!/
    let cipher = "";
    for (let i = 0; i < kata.length; i++) {
        if ((kata[i].charCodeAt(0) >= 65) && (kata[i].charCodeAt(0) <= 90)) {
            cipher += String.fromCharCode((kata[i].charCodeAt(0)-65 + 1 ) % 26 + 65)
        }
        else if ((kata[i].charCodeAt(0) >= 97) && (kata[i].charCodeAt(0) <= 122)) {
            cipher += String.fromCharCode((kata[i].charCodeAt(0)-97 + 1 ) % 26 + 97)
        }
        else {
            cipher += kata[i];
        }
    }
    return cipher;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu