function cariModus(arr) {
    // you can only write your code here!
    const modus = {};
    let modusData = [];
    let modusAkhir = [0, 0];
    for (const value of arr) {
        (modus[value] === undefined) ? modus[value] = 1 : modus[value]++;
    }
    for (const key in modus) {
        if (modus.hasOwnProperty(key)) {
            modusData.push([Number(key), modus[key]])
        }
    }
    if (modusData.length < 2) {
        return -1;
    }
    
    for (let i = 0; i < modusData.length; i++) {
        if (modusData[i][1] > modusAkhir[1]) {
            modusAkhir[0] = modusData[i][0];
            modusAkhir[1] = modusData[i][1];
        }
    }
    return (modusAkhir[1] < 2) ? -1 : modusAkhir[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1