function groupAnimals(animals) {
    // you can only write your code here!
    let result = [];
    for (let i = 0; i < animals.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (animals[i][0] === result[j][0]) { 
                found = true;
                result[j].push(animals[i])
                break;
            }
        }
        if (!found) {
            result.push([animals[i][0], animals[i]])
        }
    }
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].slice(1);
    }
    return result.sort();
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]