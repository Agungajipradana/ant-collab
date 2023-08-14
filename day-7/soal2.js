/*
Logic Challenge - Menghitung Jumlah Huruf Vokal

RESTRICTION Tidak boleh menggunakan built-in function apapun
*/

/*
Directions

Diberikan sebuah variabel kalimat bertipe string. Buatlah program yang menghitung jumlah huruf vokal (a, e, i, o, u) yang terdapat dalam kalimat tersebut (dilarang menggunakan built-in function includes, indexOf, atau regex).

Contoh 1:
let kalimat = 'I have a dream'

maka output yang dihasilkan adalah 5

Contoh 2:
let kalimat = 'The quick brown fox jumps over the lazy dog'

maka output yang dihasilkan adalah 9

Contoh 3:
let kalimat = 'Hello, how are you?'

maka output yang dihasilkan adalah 7
*/

/*
ALGORITMA:
1.Memulai Program
2.Inisialisasi variabel "kalimat" dengan nilai "I have a dream".
3.Inisialisasi variabel "vokalCount" dengan nilai 0.
4.Untuk setiap indeks "i" dari 0 hingga panjang "kalimat" kurang 1
    *Ambil karakter huruf pada indeks "i" dari "kalimat".
    *Ubah karakter huruf menjadi huruf kecil dengan menggunakan metode "toLowerCase()".
    *Periksa apakah huruf yang diubah adalah salah satu dari "a", "e", "i", "o", atau "u".
    *Jika ya, tambahkan 1 ke variabel "vokalCount".
5.Cetak nilai dari variabel "vokalCount".
6.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize variable "kalimat" with the value "I have a dream".
Initialize variable "vokalCount" with the value 0.
For each index "i" from 0 to the length of "kalimat" minus 1, do the following:
   Get the character "huruf" at index "i" from "kalimat".
   Convert the character "huruf" to lowercase using the "toLowerCase()" method.
   Check if the modified "huruf" is one of "a", "e", "i", "o", or "u".
   If yes, add 1 to the "vokalCount" variable.
Print the value of the "vokalCount" variable.
END
*/

/*
IMPLEMENTASI:
*/

let kalimat = "I have a dream";
let vokalCount = 0;

for (let i = 0; i < kalimat.length; i++) {
  let huruf = kalimat[i].toLowerCase();
  if (huruf === "a" || huruf === "e" || huruf === "i" || huruf === "o" || huruf === "u") {
    vokalCount++;
  }
}

console.log(vokalCount);
