function changeVocals (str) {
    //code di sini
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        switch (true) {
            case (((letter === "a") || (letter === "A")) || ((letter === "i") || (letter === "I")) || ((letter === "u") || (letter === "U")) || ((letter === "e") || (letter === "E")) || ((letter === "o") || (letter === "O"))):
                result += String.fromCharCode(letter.charCodeAt(0) + 1);
                break;
            default:
                result += letter;
                break;
        }
    }
    return result;
}

function reverseWord (str) {
    //code di sini
    let result = "";
    for (let i = str.length - 1; i >= 0 ; i--) {
        const letter = str[i];
        result += letter;
    }
    return result;
}

function setLowerUpperCase (str) {
    //code di sini
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if ((letter >= "A") && (letter <= "Z")) {
            result += String.fromCharCode(letter.charCodeAt(0) + 32);
        }
        else if ((letter >= "a") && (letter <= "z")) {
            result += String.fromCharCode(letter.charCodeAt(0) - 32);
        }
        else {
            result += letter;
        }
    }
    return result;
}

function removeSpaces (str) {
    //code di sini
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (letter === " ") {
            continue;
        }
        else {
            result += letter;
        }
    }
    return result;
}

function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter";
    }
    name = changeVocals(name);
    name = reverseWord(name);
    name = setLowerUpperCase(name);
    name = removeSpaces(name);
    return name;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'