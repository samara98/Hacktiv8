// var nama = prompt("Masukan Nama ");
// var peran = prompt("Masukan Peran(Ksatria, Tabib, Penyihir) ");
var nama = "Sulthon Abdul Malik";
var peran = "Penyihir"

if (nama !== "") {
    if (peran === "") {
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
    }
    else if (peran.toLowerCase() === "ksatria") {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    }
    else if (peran.toLowerCase() === "tabib") {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
    }
    else if (peran.toLowerCase() === "penyihir") {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
        
    }
    else {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}. Nama peranmu salah!`);
    }
}
else {
    console.log("Nama harus diisi!")
}
