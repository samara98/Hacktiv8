function sorting(arrNumber) {
    // code di sini
    const len = arrNumber.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arrNumber[j] > arrNumber[j+1]) {
                const tmp = arrNumber[j];
                arrNumber[j] = arrNumber[j+1];
                arrNumber[j+1] = tmp;
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber) {
    // code di sini
    let result = "";
    if (arrNumber.length === 0) {
        return result
    }
    let max = arrNumber[0];
    let frequention = 1
    for (let i = 1; i < arrNumber.length; i++) {
        const number = arrNumber[i];
        if (number > max) {
            max = number;
            frequention = 1;
        }
        else {
            frequention++;
        }
    }
    result = `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${frequention} kali`;
    return result;
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''