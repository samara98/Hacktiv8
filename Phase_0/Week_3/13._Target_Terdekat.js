function targetTerdekat(arr) {
    // you can only write your code here!
    let o = -1;
    let nearest;
    let target = [];
    // finding "o"
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === "o") {
            o = i;
            break
        }
    }
    if (o !== -1) {
        // locating "x"
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase() === "x") {
                target.push(i)
            }
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
    return 0;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2