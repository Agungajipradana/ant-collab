/*
Tujuan

    * Memahami struktur alur program dengan algoritma dan pseudocode perulangan
    * Dapat membuat algoritma dan pseudocode dari sebuah permasalahan kecil
*/
/*
Petunjuk

Andi memiliki sejumlah angka dalam sebuah array, dan dia ingin mengelompokkan angka-angka tersebut menjadi 3 kelompok berdasarkan kondisi berikut:

    1.Kelompok Pertama: Angka-angka yang merupakan kelipatan 3
    2.Kelompok Kedua: Angka-angka yang merupakan kelipatan 5
    3.Kelompok Ketiga: Angka-angka yang bukan kelipatan 3 maupun kelipatan 5
Tampilkan angka-angka tersebut ke dalam kelompok-kelompok tersebut dalam bentuk array.
*/

/*
Input:

Andi memiliki array angka berikut: [3, 5, 7, 9, 15, 12, 10, 6, 8, 20]
*/

/*
Output:

Kelompok Pertama: [3, 9, 15, 12, 6]
Kelompok Kedua: [5, 10, 20]
Kelompok Ketiga: [7, 8]

Buatlah algoritma & pseudocode untuk menyelesaikan permasalahan ini.
*/

/*
* ALGORITMA:
1.Memulai Program
2.Inisialisasi tiga array kosong: "kelompokPertama", "kelompokKedua", dan "kelompokKetiga".
3.Iterasi melalui setiap angka dalam array "angka".
4.Periksa apakah angka tersebut habis dibagi 3. Jika iya, tambahkan ke "kelompokPertama".
5.Jika tidak, periksa apakah angka tersebut habis dibagi 5. Jika iya, tambahkan ke "kelompokKedua".
6.Jika tidak memenuhi kedua kondisi di atas, tambahkan angka ke "kelompokKetiga".
7.Tampilkan isi dari "kelompokPertama", "kelompokKedua", dan "kelompokKetiga".
8.Selesai
*/

/*
* PSEUDOCODE:
START
Initialize three empty arrays: kelompokPertama, kelompokKedua, kelompokKetiga.
FOR each number IN array angka DO
     IF number MOD 3 EQUALS 0 THEN
         ADD number TO kelompokPertama
     ELSE IF number MOD 5 EQUALS 0 THEN
         ADD number TO kelompokKedua
     ELSE
         ADD number TO kelompokKetiga
     END IF
END FOR
DISPLAY the contents of kelompokPertama
DISPLAY the contents of kelompokKedua
DISPLAY the contents of kelompokKetiga
END 
*/

let kelompokPertama = [];
let kelompokKedua = [];
let kelompokKetiga = [];

let angka = [3, 5, 7, 9, 15, 12, 10, 6, 8, 20];

for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 3 === 0) {
    kelompokPertama.push(angka[i]);
  } else if (angka[i] % 5 === 0) {
    kelompokKedua.push(angka[i]);
  } else {
    kelompokKetiga.push(angka[i]);
  }
}

console.log(kelompokPertama);
console.log(kelompokKedua);
console.log(kelompokKetiga);
