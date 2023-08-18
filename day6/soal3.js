/*
Logic Challenge - Bandingkan Angka
*/

/*
Objectives
    *Mampu memecahkan masalah yang diberikan
    *Mengerti konsep conditional untuk membandingkan sebuah angka
    *Mampu menggunakan operator '<', '>', '==='
*/

/*
Directions
Diberikan dua letiabel angka bertipe number yaitu angka1 dan angka2.

RESTRICTION Tidak boleh menggunakan built-in function apapun

Buatlah program yang membandingkan kedua angka tersebut, jika angka2 lebih besar dari angka1 maka tampilkan nilai true, dan false jika sebaliknya. Jika kedua angka bernilai sama, maka tampilkan -1.

Contoh 1: let angka1 = 5 let angka2 = 3

maka output adalah false

Contoh 2: let angka1 = 5 let angka2 = 5

maka output adalah -1
*/

/*
ALGORITMA:
1.Memulai Program
2.Inisialisasi variabel "angka1" dengan nilai 5.
3.Inisialisasi variabel "angka2" dengan nilai 5.
4.Bandingkan nilai angka1 dengan angka2.
5.Jika "angka1" lebih besar dari "angka2", tampilkan "true"
6.Jika "angka1" lebih kecil dari "angka2", tampilkan "false".
7.Jika "angka1" sama dengan "angka2", tampilkan "-1".
8.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize angka1 with the value 5
Initialize angka2 with the value 5
If angka1 > angka2, then
  Display "true"
If angka1 < angka2, then
  Display "false"
If angka1 = angka2, then
  Display "-1"
End
*/

/*
IMPLEMENTASI:
*/

let angka1 = 5;
let angka2 = 5;

if (angka1 > angka2) {
  console.log(true);
} else if (angka1 < angka2) {
  console.log(false);
} else {
  console.log(-1);
}
