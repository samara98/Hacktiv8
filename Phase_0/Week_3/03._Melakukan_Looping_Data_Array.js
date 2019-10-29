//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(data) {
    for (let i = 0; i < data.length; i++) {
        let idNumber = "";
        let name = "";
        let place = "";
        let birthDate = "";
        let hobby = "";
        for (let j = 0; j < data[i].length; j++) {
            switch (j) {
                case 0:
                    idNumber += data[i][j]
                    break;
                case 1:
                    name += data[i][j]
                    break;
                case 2:
                    place += data[i][j]
                    break;
                case 3:
                    birthDate += data[i][j]
                    break;
                case 4:
                    hobby += data[i][j]
                    break;
                default:
                    break;
            }
        }
        console.log(`Nomor ID:  ${idNumber}`);
        console.log(`Nama Lengkap:  ${name}`);
        console.log(`TTL:  ${place} ${birthDate}`);
        console.log(`Hobi:  ${hobby}`);
        console.log();
    }
}

dataHandling(input);