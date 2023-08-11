/* 
Soal Latihan String: Penggabungan dan Pemecahan Kata
RESTRICTION
  1.DILARANG MENGGUNAKAN BUILT IN FUNCTION DARI JAVASCRIPT
  2.Hanya boleh menggunakan built-in function Math seperti Math.random, Math.ceil, Math.round, Math.floor, dll */

// ----------------------------------------------------------------------------------------------------------------

/* 
1.Menggabungkan kata-kata
Deskripsi
Pada tugas ini, kamu diminta untuk menggabungkan beberapa kata menjadi sebuah kalimat. Disediakan variabel kataPertama, kataKedua, kataKetiga, kataKeempat, dan kataKelima. Gabungkan nilai-nilai variabel tersebut dengan menambahkan spasi di antara kata-kata, lalu tampilkan hasilnya di console. 
*/

var kataPertama = "Saya";
var kataKedua = "adalah";
var kataKetiga = "seorang";
var kataKeempat = "programmer";
var kataKelima = "handal";

var allKalimat = kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat + " " + kataKelima;

console.log(allKalimat);

// ----------------------------------------------------------------------------------------------------------------

/* 
2. Pemecahan Kata - Karakter per Karakter
Deskripsi
Pada tugas ini, kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata secara per karakter. Gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Tampilkan hasilnya di console.
*/

/*
* ALGORITMA:
1.Memulai Program
2.Membuat sebuah variabel var kalimat = "Hari ini adalah hari yang cerah"
3.Membuat sebuah perulangan "for" dengan inisialisasi variabel "i" dengan nilai 0
4.Menentukan kondisi perulangan i < (kurang dari) panjang pada variabel "kalimat" 
5.Mulai iterasi dari 0 hingga panjang kalimat - 1.
6.Ambil karakter pada indeks ke-i dari kalimat.
7.Menampilkan pesan di console browser hasil dari karakter yang diambil
8.Selesai
*/

/*
* PSEUDOCODE:
START
SET kalimat TO "Hari ini adalah hari yang cerah"
  FOR i = 0 TO length of kalimat - 1
    SET karakter TO character at index i of kalimat
    DISPLAY karakter
  END FOR
END
*/

/*
 * IMPLEMENTASI:
 */

var kalimat = "Hari ini adalah hari yang cerah";

for (var i = 0; i < kalimat.length; i++) {
  console.log(kalimat[i]);
}

// ----------------------------------------------------------------------------------------------------------------

/*
3. Pemecahan Kata Menggunakan Substring
Deskripsi
Pada tugas ini, kamu diminta untuk "memecah" sebuah kalimat menggunakan metode substring. Ambil potongan dari tiap kata, kemudian tampilkan hasilnya di console.
*/

/*
* ALGORITMA:
1.Memulai Program
2.Membuat sebuah variabel var kalimat = "Hari ini adalah hari yang cerah"
3.Membuat sebuah variabel let startIndex = 0
4.Membuat sebuah perulangan "for" dengan inisialisasi variabel "i" dengan nilai 0
5.Menentukan kondisi perulangan i < (kurang dari) panjang pada variabel "kalimat" 
6.Mulai iterasi dari 0 hingga panjang kalimat - 1.
7.Membuat sebuah pengkondisian "if" untuk mengecek apakah karakter pada indeks ke-i adalah spasi atau jika i   adalah panjang kalimat - 1.
  * Jika ya, set variabel endIndex dengan i + 1 jika i adalah panjang kalimat - 1, jika tidak, set endIndex dengan nilai i.
  * Ambil substring dari kalimat mulai dari startIndex hingga endIndex - 1, simpan dalam variabel kata.
  * Tampilkan kata menggunakan console.log.
  * Set startIndex dengan i + 1.
8.Selesai
*/

/*
* PSEUDOCODE:
START
SET kalimat TO "Hari ini adalah hari yang cerah"
  SET startIndex TO 0
  FOR i = 0 TO length of kalimat - 1
    IF character at index i of kalimat is equal to " " OR i is equal to length of kalimat - 1
      SET endIndex TO i + 1 IF i is equal to length of kalimat - 1, ELSE endIndex = i
      SET kata TO substring of kalimat from startIndex to endIndex - 1
      DISPLAY kata
      SET startIndex TO i + 1
    END IF
  END FOR
END
*/

/*
 * IMPLEMENTASI:
 */

var kalimat = "Hari ini adalah hari yang cerah";
let startIndex = 0;

for (let i = 0; i < kalimat.length; i++) {
  if (kalimat[i] === " " || i === kalimat.length - 1) {
    let endIndex = i === kalimat.length - 1 ? i + 1 : i;
    let kata = kalimat.substring(startIndex, endIndex);
    console.log(kata);
    startIndex = i + 1;
  }
}

// ----------------------------------------------------------------------------------------------------------------

/*
4. Pemecahan Kata dan Perhitungan Panjangnya
Deskripsi
Pada tugas ini, kamu diminta untuk "memecah" sebuah kalimat menggunakan metode substring. Tampilkan juga panjang kata masing-masingnya di samping kata tersebut di console.
*/

/*
* ALGORITMA:
1.Memulai Program
2.Membuat sebuah variabel var kalimat = "Hari ini adalah hari yang cerah"
3.Membuat sebuah variabel let startIndex = 0
4.Membuat sebuah perulangan "for" dengan inisialisasi variabel "i" dengan nilai 0
5.Menentukan kondisi perulangan i < (kurang dari) panjang pada variabel "kalimat" 
6.Mulai iterasi dari 0 hingga panjang kalimat - 1.
7.Membuat sebuah pengkondisian "if" untuk mengecek apakah karakter pada indeks ke-i adalah spasi atau jika i   adalah panjang kalimat - 1.
  * Jika ya, set variabel endIndex dengan i + 1 jika i adalah panjang kalimat - 1, jika tidak, set endIndex dengan nilai i.
  * Ambil substring dari kalimat mulai dari startIndex hingga endIndex - 1, simpan dalam variabel kata.
  * Hitung panjang kata dan simpan dalam variabel lengthKata.
  * Tampilkan lengthKata menggunakan console.log.
  * Set startIndex dengan i + 1.
8.Selesai
*/

/*
* PSEUDOCODE:
START
 SET kalimat TO 'Hari ini adalah hari yang cerah'
  SET startIndex TO 0
  FOR i = 0 TO length of kalimat - 1
    IF character at index i of kalimat is equal to " " OR i is equal to length of kalimat - 1
      SET endIndex TO i + 1 IF i is equal to length of kalimat - 1, ELSE endIndex = i
      SET kata TO substring of kalimat from startIndex to endIndex - 1
      SET lengthKata TO kata concatenated with "(panjang: " concatenated with length of kata concatenated with ")"
      DISPLAY lengthKata
      SET startIndex TO i + 1
    END IF
  END FOR
END
*/

/*
 * IMPLEMENTASI:
 */

var kalimat = "Hari ini adalah hari yang cerah";
let startIndexs = 0;

for (let i = 0; i < kalimat.length; i++) {
  if (kalimat[i] === " " || i === kalimat.length - 1) {
    let endIndex = i === kalimat.length - 1 ? i + 1 : i;
    let kata = kalimat.substring(startIndexs, endIndex);
    let lenghtKata = `${kata} (panjang: ${kata.length})`;
    console.log(lenghtKata);
    startIndexs = i + 1;
  }
}
