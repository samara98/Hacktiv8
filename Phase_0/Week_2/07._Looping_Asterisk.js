// 1. Menyusun Barisan Bintang
var rows1 = 10;
for (let i = 0; i < rows1; i++) {
    console.log("*");
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 10;
for (let i = 0; i < rows2; i++) {
    let str = "";
    for (let j = 0; j < 10; j++) {
        str = str + "*";
    }
    console.log(str);
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 10;
for (let i = 0; i < rows3; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
        str = str + "*";
    }
    console.log(str);
}
