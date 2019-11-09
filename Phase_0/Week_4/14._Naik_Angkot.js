function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    const result = [];
    for (const value of arrPenumpang) {
        let start = 0;
        let finish = 0;
        for (const index in rute) {
            if (value[1] === rute[index]) {
                start = index;
            }
            if (value[2] === rute[index]) {
                finish = index;
            }
        }
        const passenger = {
            penumpang: value[0],
            naikDari: value[1],
            tujuan: value[2],
            bayar: Math.abs(finish - start) * 2000
        };
        result.push(passenger);
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]