function urutkanAbjad(str) {
    // you can only write your code here!
    let huruf = [];
    let result = "";
    for (let i = 0; i < str.length; i++) {
        huruf.push(str[i]);
    }
    huruf = huruf.sort();
    for (let i = 0; i < huruf.length; i++) {
        result += huruf[i];
    }
    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'