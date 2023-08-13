/*
Logic Challenge - Konversi Menit
*/

/*
Objectives
    *Mampu memecahkan masalah yang diberikan
    *Mengerti konsep conditional untuk membandingkan sebuah angka
    *Mampu menggunakan operator '%', '<', '>' ataupun '==='

RESTRICTION Tidak boleh menggunakan built-in function selain Math, seperti Math.random(), Math.floor(), dll dan built-in function untuk mengkonversi tipe data, seperti toSting(), Number(), dll
*/

/*
Problem
Diberikan sebuah letiable detik yang bertipe number.

Buatlah program yang akan menghasilkan String waktu dalam format menit:detik

Contoh 1:
let detik = 88

maka output adalah 1:28

Contoh 2:
let detik = 44

maka output adalah 0:44

Contoh 3:
let detik = 61

maka output adalah 1:01
*/

/*
ALGORITMA:
1.Memulai Program
2.Hitung nilai menit dengan membagi variabel "detik" dengan 60 dan lakukan pembulatan ke bawah.
3.Hitung sisa detik dengan menghitung sisa dari pembagian variabel "detik" dengan 60.
4.Inisialisasi variabel formattedTime dengan nilai awal dari menit diikuti tanda ":".
5.Jika nilai sisaDetik kurang dari 10, tambahkan "0" ke dalam variabel formattedTime
6.Tambahkan nilai sisaDetik ke dalam variabel formattedTime.
7.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize detik with the value of time in seconds.
Calculate menit by dividing detik by 60 and rounding down to the nearest integer.
Calculate sisaDetik by finding the remainder of detik divided by 60.
Initialize formattedTime with the value of menit followed by a colon ":".
If sisaDetik is less than 10, append "0" to formattedTime.
Append the value of sisaDetik to formattedTime.
Print formattedTime to the console.
End
*/

/*
IMPLEMENTASI:
*/

let detik = 88;
let menit = Math.floor(detik / 60);
let sisaDetik = detik % 60;

let formattedTime = menit + ":";

if (sisaDetik < 10) {
  formattedTime += "0";
}

formattedTime += sisaDetik;
console.log(formattedTime);
