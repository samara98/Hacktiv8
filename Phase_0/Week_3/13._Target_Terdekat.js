function targetTerdekat(arr) {
    // you can only write your code here!
    let o = -1;
    let target = [];
    let nearest;
    // finding "o" and "x"
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === "o") {
            o = i;
        }
        if (arr[i].toLowerCase() === "x") {
            target.push(i)
        }
    }
    if (o === -1 || target.length === 0) {
        return 0;
    }
    //finding nearest target
    if (target.length !== 0) {
        nearest = Math.abs(target[0] - o)
        for (let i = 1; i < target.length; i++) {
            if (Math.abs(target[i] - o) < nearest) {
                nearest = Math.abs(target[i] - o);
            }
        }
        return nearest;
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2