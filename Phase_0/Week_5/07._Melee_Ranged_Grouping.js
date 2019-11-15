function meleeRangedGrouping (str) {
    //your code here
    if (str.length === 0) {
        return [];
    }
    
    const chars = str.split(",");
    const ranged = [];
    const melee = [];
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i].split("-");
        if (char[1].toLowerCase() === "ranged") {
            ranged.push(char[0]);
        }
        else if (char[1].toLowerCase() === "melee") {
            melee.push(char[0]);
        }
    }
    return [ranged, melee];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []