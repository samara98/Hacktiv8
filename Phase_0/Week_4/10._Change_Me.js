function changeMe(arr) {
    // you can only write your code here!
    if (arr.length === 0) {
        console.log('""');
    }
    else {
        const date = new Date();
        for (let i = 0; i < arr.length; i++) {
            const actor = new Object();
            if (arr[i][0] === undefined) {
                actor["firstName"] = "???";
            }
            else {
                actor["firstName"] = arr[i][0];
            }
            if (arr[i][1] === undefined) {
                actor["lastName"] = "???";
            }
            else {
                actor["lastName"] = arr[i][1];
            }
            if (arr[i][2] === undefined) {
                actor["gender"] = "Genderless";
            }
            else {
                actor["gender"] = arr[i][2];
            }
            if (arr[i][3] === undefined) {
                actor["age"] = "Invalid Birth Date";
            }
            else {
                actor["age"] = date.getFullYear() - arr[i][3];
            }
            console.log(`${i+1}. ${actor.firstName} ${actor.lastName}`);
            console.log(actor);
        }
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""