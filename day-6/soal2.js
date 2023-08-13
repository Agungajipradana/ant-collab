/*
Logic Challenge - Balik Kata
*/
/*
Objectives
    Mengerti logika looping
    Dapat mengakses indeks dari sebuah String dari indeks awal sampai akhir ataupun sebaliknya
*/

/*
Directions
Diberikan sebuah variabel kata bertipe String. Buatlah program yang dapat membalikkan kata tersebut tanpa menggunakan built in function apapun dari javascript. Kerjakan dengan menggunakan looping!

RESTRICTION Tidak boleh menggunakan built-in function apapun

Contoh: let kata = 'AntCollab'

maka output yang dihasilkan adalah 'balloCtnA'
*/

/*
ALGORITMA:
1.Memulai Program
2.Inisialisasi variabel "kata" dengan string yang ingin dibalik
3.Inisialisasi variabel "reversed" dengan string kosong
4.Ulangi "i" dari panjang "kata" dikurangi 1 hingga 0
    *Tambahkan karakter dari "kata" dengan indeks "i" ke dalam "reversed"
5.Cetak nilai variabel "reversed" ke konsol
6.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize variable kata with the string to be reversed
FOR each i FROM the length of kata MINUS 1 DOWN TO 0, DO
   Add character from kata with index i to reversed
Print the value of variable reversed
End
*/

/*
IMPLEMENTASI:
*/

let kata = "AntCollab";
let reversed = "";

for (let i = kata.length - 1; i >= 0; i--) {
  reversed += kata[i];
}
console.log(reversed);
