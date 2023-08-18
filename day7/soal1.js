/*
Data Type Challenge
Diberikan sebuah variabel nilai bertipe data apapun (string, number, boolean, null, undefined, atau lainnya). Buatlah program untuk mengecek tipe data dari nilai tersebut dan memberikan output berikut:

    *Jika nilai adalah sebuah string, tampilkan 'Nilai berupa string: ' + nilai (gunakan template literals).
    *Jika nilai adalah sebuah number, tampilkan 'Nilai berupa number: ' + nilai (gunakan template literals).
    *Jika nilai adalah sebuah boolean, cek nilainya:
    *Jika true, tampilkan 'Nilai berupa boolean dan bernilai true'.
    *Jika false, tampilkan 'Nilai berupa boolean dan bernilai false'.
    *Jika nilai adalah null, tampilkan 'Nilai adalah null'.
    *Jika nilai adalah undefined, tampilkan 'Nilai adalah undefined'.
    *Jika nilai adalah NaN (Not-a-Number), tampilkan 'Nilai adalah NaN'.
    *Jika nilai adalah angka 0, tampilkan 'Nilai adalah angka 0'.
    *Jika nilai adalah empty string (string kosong), tampilkan 'Nilai adalah empty string'.

Contoh:

Contoh 1:
let nilai = 'Hello World';
Output: 'Nilai berupa string: Hello World'

Contoh 2:
let nilai = 42;
Output: 'Nilai berupa number: 42'

Contoh 3:
let nilai = true;
Output: 'Nilai berupa boolean dan bernilai true'

Contoh 4:
let nilai = null;
Output: 'Nilai adalah null'

Contoh 5:
let nilai;
Output: 'Nilai adalah undefined'

Contoh 6:
let nilai = NaN;
Output: 'Nilai adalah NaN'

Contoh 7:
let nilai = 0;
Output: 'Nilai adalah angka 0'

Contoh 8:
let nilai = '';
Output: 'Nilai adalah empty string'
*/

/*
ALGORITMA:
1.Memulai Program
2.Inisialisasi variabel nilai dengan nilai yang akan diperiksa.
    *Cek tipe data dari nilai:
    *Jika tipe data adalah string, cetak "Nilai berupa string: " diikuti dengan nilai.
        *Jika tipe data adalah number:
        *Jika nilai sama dengan 0, cetak "Nilai adalah angka 0".
    *Jika tidak, cetak "Nilai berupa number: " diikuti dengan nilai.
        *Jika tipe data adalah boolean:
        *Jika nilai adalah true, cetak "Nilai berupa boolean dan bernilai true".
    *Jika nilai adalah false, cetak "Nilai berupa boolean dan bernilai false".
    *Jika nilai adalah null, cetak "Nilai adalah null".
    *Jika tipe data adalah undefined, cetak "Nilai adalah undefined".
    *Jika nilai adalah NaN, cetak "Nilai adalah NaN".
    *Jika nilai sama dengan 0, cetak "Nilai adalah angka 0".
    *Jika nilai adalah string kosong, cetak "Nilai adalah empty string".
    *Jika nilai tidak termasuk dalam kategori di atas, cetak "Tipe data tidak dikenali".
3.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize rows1 with the desired number of rows
Repeat for i from 0 to less than rows1
   Print "*"
   Add 1 to i
END
*/

/*
IMPLEMENTASI:
*/

let nilai = "Hello World";

if (typeof nilai === "string") {
  console.log(`Nilai berupa string: ${nilai}`);
} else if (typeof nilai === "number") {
  if (nilai === 0) {
    console.log(`Nilai adalah angka ${nilai}`);
  } else {
    console.log(`Nilai berupa number: ${nilai}`);
  }
} else if (typeof nilai === "boolean") {
  if (nilai === true) {
    console.log(`Nilai berupa boolean dan bernilai ${nilai}`);
  } else {
    console.log(`Nilai berupa boolean dan bernilai ${nilai}`);
  }
} else if (nilai === null) {
  console.log(`Nilai adalah ${nilai}`);
} else if (typeof nilai === "undefined") {
  console.log(`Nilai adalah ${nilai}`);
} else if (nilai === NaN) {
  console.log(`Nilai adalah ${nilai}`);
} else if (nilai === 0) {
  console.log(`nilai adalah angka 0`);
} else if (nilai === "") {
  console.log(`Nilai adalah empty string`);
} else {
  console.log(`Tipe data tidak dikenali`);
}
