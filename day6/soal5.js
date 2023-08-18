/*
Logic Challenge - A dan C
*/

/*
Objectives
    Mampu memecahkan masalah yang diberikan
    Mampu menggunakan operator '<', '>' ataupun '==='
    Mampu menggabungkan konsep looping/iteration dan conditional didalam sebuah masalah

    RESTRICTION Tidak boleh menggunakan built-in function apapun dan regex
*/

/*
Problem
Diberikan sebuah variable kata bertipe String.

Buatlah program dimana program tersebut akan menghitung jumlah karakter a dan jumlah karakter c. Setelah perhitungan selesai maka tampilkan true jika jumlah karakter a dan c sama dan false jika tidak

Contoh 1:
var kata = 'acacac'

maka output adalah true


Contoh 2:
var kata = acaacac

maka output adalah false
*/

/*
ALGORITMA:
1.Inisialisasi variabel kata dengan string input.
2.Inisialisasi variabel countA dengan 0.
3.Inisialisasi variabel countC dengan 0.
4.Lakukan pengulangan untuk setiap karakter char dalam kata:
    *Jika char sama dengan 'a', maka increment countA dengan 1.
    *Jika char sama dengan 'c', maka increment countC dengan 1.
5.Hitung hasil dengan membandingkan apakah countA sama dengan countC.
6.Tampilkan hasil.
7.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize kata as the input string.
Initialize countA with 0.
Initialize countC with 0.
FOR each character (char) in kata DO
    IF char is equal to 'a' THEN
        Increment countA by 1
    ELSE IF char is equal to 'c' THEN
        Increment countC by 1
Calculate result by checking if countA is equal to countC.
Print the value of result.
End
*/

/*
IMPLEMENTASI:
*/

var kata = "acacac";
var countA = 0;
var countC = 0;

for (let i = 0; i < kata.length; i++) {
  if (kata[i] === "a") {
    countA++;
  } else if (kata[i] === "c") {
    countC++;
  }
}

var result = countA === countC;
console.log(result);
