// 1. Melakukan Looping Menggunakan While
console.log("LOOPING PERTAMA");
var i = 0;
while (i < 20) {
    i = i + 2;
    console.log(`${i} - LOOPING PERTAMA`);
}
console.log("LOOPING KEDUA");
while (i > 1) {
    console.log(`${i} - I will become fullstack developer`);
    i = i - 2;
}


// 2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for (let i = 0; i <= 20; i++) {
    console.log(`${i} - I love coding`);
}
console.log("LOOPING KEDUA");
for (let i = 20; i > 0; i--) {
    console.log(`${i} - I will become fullstack developer`);
}

// 3. Angka Ganjil dan Genap
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("GENAP");
    }
    else {
        console.log("GANJIL")
    }
}
for (let i = 1; i <= 100; i += 2) {
    if (i % 3 == 0) {
        console.log(`${i} KELIPATAN 3`)
    }
    else {
        continue;
    }
}
for (let i = 1; i <= 100; i += 5) {
    if (i % 6 == 0) {
        console.log(`${i} KELIPATAN 6`)
    }
    else {
        continue;
    }
}
for (let i = 1; i <= 100; i += 9) {
    if (i % 10 == 0) {
        console.log(`${i} KELIPATAN 10`)
    }
    else {
        continue;
    }
}
