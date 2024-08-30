
class Pelajar {
    constructor(nama, sekolah) {
      this._nama = nama;
      this._sekolah = sekolah;
    }
  
    setNama(nama) {
      this._nama = nama;
    }
  
    setSekolah(sekolah) {
      this._sekolah = sekolah;
    }
  
    getNama() {
      return this._nama;
    }
  
   
    getSekolah() {
      return this._sekolah;
    }
  
    
    belajar() {
      return `${this.getNama()} belajar di ${this.getSekolah()}`;
    }
  }
  
  
  let pelajar = new Pelajar("Alpha", "Skilvul");
  
  
  console.log(pelajar.belajar()); 









  class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang
        this.lebar = lebar
    }

    luas() {
        var hasil = this.panjang*this.lebar;
        return hasil;
    }
    
    keliling() {
        var hasil = 2*this.panjang + this.lebar;
        return hasil;
    }

    
}

let persegiPanjang = new PersegiPanjang (4,3)
console.log(persegiPanjang.luas())
console.log(persegiPanjang.keliling())

// soal 1

class Mobil {
    constructor(merk, tahun) { 
      this._merk = merk;
      this._tahun = tahun;
    }
  
    getMerk() {
      return this._merk;
    }
  
    setMerk(merk) {
      this._merk = merk;
    }
  
    getTahun() {
      return this._tahun;
    }
  
    setTahun(tahun) {
      this._tahun = tahun;  
    }
  }

let mobilSaya = new Mobil("Toyota", 2020);

console.log(mobilSaya.getMerk());  
console.log(mobilSaya.getTahun()); 

mobilSaya.setMerk("Honda");
mobilSaya.setTahun(2022);

console.log(mobilSaya.getMerk());  
console.log(mobilSaya.getTahun());  

// soal 2

class Pesawat {
  constructor(jenis, kecepatan) {
    this._jenis = jenis;
    this._kecepatan = kecepatan;
  }

  terbang() {
    console.log(`${this._jenis} sedang terbang dengan kecepatan ${this._kecepatan} km/jam.`);
  }
}

class Jet extends Pesawat {
  constructor(jenis, kecepatan, kapasitasBahanBakar) {
    super(jenis, kecepatan);
    this._kapasitasBahanBakar = kapasitasBahanBakar;
  }

  isiBahanBakar() {
    console.log(`${this._jenis} sedang mengisi bahan bakar sebanyak ${this._kapasitasBahanBakar} liter.`);
  }
}

const jetTempur = new Jet("Jet Tempur", 1500, 5000);

jetTempur.terbang(); 
jetTempur.isiBahanBakar(); 

// soal 3

 // Kelas Karyawan
class dosen {
  constructor(nama, gaji, jabatan) {
    this._nama = nama;      
    this._gaji = gaji;      
    this._jabatan = jabatan; 
  }

  getNama() {
    return this._nama;
  }

  setNama(nama) {
    this._nama = nama;
  }

  getGaji() {
    return this._gaji;
  }

  setGaji(gaji) {
    if (gaji >= 0) {
      this._gaji = gaji;
    } else {
      console.log("Gaji tidak bisa negatif.");
    }
  }

  getJabatan() {
    return this._jabatan;
  }

  setJabatan(jabatan) {
    this._jabatan = jabatan;
  }
}


class Manajer extends dosen {
  constructor(nama, gaji, jabatan) {
    super(nama, gaji, jabatan);
  }

 
  beriTunjangan(tunjangan) {
    if (tunjangan >= 0) {
      this._gaji += tunjangan;
    } else {
      console.log("Tunjangan tidak bisa negatif.");
    }
  }
}


const manajer = new Manajer("Andi", 10000000, "Manajer Proyek");


console.log(`Nama: ${manajer.getNama()}`); 
console.log(`Gaji sebelum tunjangan: Rp ${manajer.getGaji()}`); 
console.log(`Jabatan: ${manajer.getJabatan()}`); 


manajer.beriTunjangan(2000000);
console.log(`Gaji setelah tunjangan: Rp ${manajer.getGaji()}`); 

// soal 4

class Kendaraan {
  constructor() {
    this._kecepatan = 0;
  }

  
  getKecepatan() {
    return this._kecepatan;
  }

  
  setKecepatan(value) {
    
    if (value >= 0) {
      this._kecepatan = value;
    } else {
      console.log("Kecepatan tidak bisa diatur di bawah 0.");
    }
  }
}


const mobil = new Kendaraan();


mobil.setKecepatan(100);
console.log(`Kecepatan mobil setelah diatur ke 100: ${mobil.getKecepatan()} km/jam`); 


mobil.setKecepatan(-50);
console.log(`Kecepatan mobil setelah diatur ke -50: ${mobil.getKecepatan()} km/jam`); 
// soal 5

  class AkunBank {
  
  constructor(saldoAwal) {
    this._saldo = saldoAwal >= 0 ? saldoAwal : 0;
  }

  getSaldo() {
    return this._saldo;
  }

  setSaldo(value) {
    if (value > 0) {
      this._saldo += value; 
    } else {
      console.log("Saldo hanya bisa ditambah dan tidak boleh kurang dari 0.");
    }
  }
}


const akunSaya = new AkunBank(5000);
console.log(`Saldo awal: Rp ${akunSaya.getSaldo()}`); 

akunSaya.setSaldo(2000);
console.log(`Saldo setelah setoran: Rp ${akunSaya.getSaldo()}`); 

akunSaya.setSaldo(-3000);
console.log(`Saldo setelah percobaan pengurangan: Rp ${akunSaya.getSaldo()}`); 


akunSaya.setSaldo(1500);
console.log(`Saldo setelah setoran tambahan: Rp ${akunSaya.getSaldo()}`); 

// soal 6

class Karyawan {
  #name;  
  #gaje;  

  constructor(name, gaje) {
      this.#name = name;
      this.#gaje = gaje;
  }

  getName() {
      return this.#name;
  }

  setName(name) {
      this.#name = name;
  }

  getGaje() {
      return this.#gaje;
  }

  setGaje(gaje) {
      this.#gaje = gaje;
  }
}

class mager extends Karyawan {
  constructor(name, gaje) {
      super(name, gaje); 
  }

  buatLaporan() {
      return `Laporan oleh Manajer ${this.getName()} dengan gaji ${this.getGaje()}.`;
  }
}

const mager1 = new mager("Andi", 15000000);

console.log(mager1.getName());  
console.log(mager1.getGaje());  

mager1.setName("Budi");
mager1.setGaje(20000000);

console.log(mager1.getName());  
console.log(mager1.getGaje());  


console.log(mager1.buatLaporan());  
