var nama = "Alvin";
var peran = "Ksatria";
if (nama === "") {
    console.log("Nama harus diisi!");
}
else {
    if (peran === "Ksatria") {
        console.log("Selamat datang di Dunia Proxytia,", nama, "\nHalo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
    }
    else if (peran === "Tabib") {
        console.log("Selamat datang di Dunia Proxytia,", nama, "\nHalo Tabib " + nama + ", kamu dapat menyerang dengan senjatamu!");
    }
    else if (peran === "Penyihir") {
        console.log("Selamat datang di Dunia Proxytia,", nama, "\nHalo Penyihir " + nama + ", kamu dapat menyerang dengan senjatamu!");
    }
    else console.log("Halo" , nama + ", Pilih peranmu untuk memulai game!");
}