function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let data = [];
    angka = Math.abs(angka);
    if (angka === 0) {
        return 0;
    }
    for (let i = 0, counter = angka; i <= counter; i++) {
        // const element = angka[i];
        if (angka % i === 0) {
            data = [i, (angka / i)];
            counter = angka / i;
        }
    }
    // console.log((String(data[0]) + String(data[1])));
    return (String(data[0]) + String(data[1])).length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2