var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data = []) {
    data.splice(1, 2, data[1] + "Elsharawy", "Provinsi " + data[2]);
    data.splice(4, 1, "Pria", "SMA Internasional Metro");

    let date = data[3].split("/");
    let newDate = date.join("-");
    let month = "";

    switch (Number(date[1])) {
        case 1:
            month = "Januari";
            break;
        case 2:
            month = "Februari";
            break;
        case 3:
            month = "Maret";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "Mei";
            break;
        case 6:
            month = "Juni";
            break;
        case 7:
            month = "Juli";
            break;
        case 8:
            month = "Agustus";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "Oktober";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "Desember";
            break;
        default:
            month = "Nama Bulan salah!!!";
            break;
    }

    date.sort((a,b) => b-a);

    console.log(data);
    console.log(month)
    console.log(date);
    console.log(newDate);
    console.log(data[1].slice(0, 15))
}

dataHandling2(input);
