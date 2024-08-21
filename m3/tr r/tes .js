function hitunghargatiket(umur)
{
    let hargaTiketPenuh = 100
    let hargaTiket;

    if (umur > 5) {
        hargaTiket = hargaTiketPenuh
    }
    else if (umur >= 2 && umur <= 5) {
        hargaTiket = hargaTiketPenuh / 2
} else {
    hargaTiket = 0
}
    return hargaTiket
}

let umurPengunjung = 5
let hargaTiket = hitunghargatiket(umurPengunjung)
console.log("harga tiket untuk pengunjung berumur " + umurPengunjung +  " tahun adalah: " + hargaTiket)

// soal nomer 1

function cekKelayakanSIM(usia) {
    if (usia >= 17) {
        return "Berhak mendapatkan SIM";
    } else {
        return "Belum berhak mendapatkan SIM";
    }
}

let usia1 = 8
let usia2 = 17
let usia3 = 28

console.log("usia " + usia1 + ":" + cekKelayakanSIM(usia1))
console.log("usia " + usia2 + ":" + cekKelayakanSIM(usia2))
console.log("usia " + usia3 + ":" + cekKelayakanSIM(usia3))

// soal nomer 2

function cekAngka(angka) {
    if (angka > 0) {
        return "Positif";
    } else if (angka < 0) {
        return "Negatif";
    } else {
        return "Netral";
    }
}

let angka1 = 0
let angka2 = -5
let angka3 = 25

console.log( "angka " + angka1 + ":" + cekAngka(angka1))
console.log("angka " + angka2 + ":" + cekAngka(angka2))
console.log("angka " + angka3 + ":" + cekAngka(angka3))

// soal nomer 3

function hitungTotalSetelahDiskon(totalPembelian) {
    let diskon = 0;

    if (totalPembelian >= 200) {
        diskon = 0.15; // Diskon 15%
    } else if (totalPembelian >= 100 && totalPembelian < 200) {
        diskon = 0.10; // Diskon 10%
    }

    let totalSetelahDiskon = totalPembelian - (totalPembelian * diskon);
    return totalSetelahDiskon;
} 

let totalPembelian1 = 250
let totalPembelian2 = 150
let totalPembelian3 = 50  

console.log("total setelah diskon untuk pembelian " + totalPembelian1 + " adalah: " + hitungTotalSetelahDiskon(totalPembelian1) + " pembelian")
console.log("total setelah diskon untuk pembelian " + totalPembelian2 + " adalah: " + hitungTotalSetelahDiskon(totalPembelian2) + " pembelian")
console.log("total setelah diskon untuk pembelian " + totalPembelian3 + " adalah: " + hitungTotalSetelahDiskon(totalPembelian3) + " pembelian")

// soal nomer 5

function validasiUsia(usia) {
    if (usia >= 18) {
        console.log("Registrasi berhasil");
    } else {
        console.log("Registrasi gagal");
    }
}

let usiapengguna1 = 20
let usiapengguna2 = 16

validasiUsia(usiapengguna1)
validasiUsia(usiapengguna2)


const y = 5
const x = 8
if (x > 0 && y > 0) {
  console.log("Kanan atas");
} else if (x < 0 && y < 0) {
  console.log("Kiri bawah");
} else if (x > 0 && y < 0) {
  console.log("Kanan bawah");
} else if (x < 0 && y > 0) {
  console.log("Kiri atas");
}