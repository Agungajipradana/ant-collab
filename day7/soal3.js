/*
Logic Challenge - Palindrome
*/

/*
Objectives
    Mampu memecahkan masalah yang diberikan
    Mampu menggabungkan konsep looping/iteration dan conditional didalam sebuah masalah
    Mampu memberhentikan sebuah loop menggunakan break

RESTRICTION Tidak boleh menggunakan built-in function apapun
*/

/*
Directions
Diberikan sebuah variabel kata bertipe String.

Buatlah program yang menampilkan true jika kata yang diberikan merupakan palindrome dan false jika bukan. Buatlah program ini tanpa menggunakan built in function .reverse()

Palindrome adalah sebuah kata yang jika dibalik atau dibaca dari belakang maka katanya tetap sama. Contoh, "katak" jika dibaca dari belakang tetaplah "katak"

Contoh 1:
let kata = 'katak'

maka output yang dihasilkan adalah true

Contoh 2:
let kata = 'kasur rusak'

maka output yang dihasilkan adalah true

Contoh 3
let kata = 'makan'

maka output yang dihasilkan adalah false
*/

/*
ALGORITMA:
1.Memulai Program
2.Inisialisasi variabel "kata" dengan string yang ingin dicek.
3.Inisialisasi variabel "isPalindrome" dengan nilai awal true, ini akan digunakan untuk menyimpan hasil pengecekan.
4.Loop dari indeks 0 hingga setengah panjang kata (kata.length / 2).
5.Dalam setiap iterasi loop, periksa apakah karakter pada indeks ke-i sama dengan karakter pada indeks ke-(panjang kata - 1 - i).
6.Jika ada karakter yang tidak cocok, set isPalindrome menjadi false dan keluar dari loop.
7.Setelah loop selesai, cek nilai isPalindrome dan cetak hasilnya.
8.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize a variable kata with a given string.
Initialize a variable isPalindrome with the value true.
FOR i from 0 to the floor value of (length of kata divided by 2):
    IF the character at index i in kata is not equal to the character at index (length of kata - 1 - i):
        Set isPalindrome to false.
        Break the loop.
Print the value of isPalindrome.
END
*/

/*
IMPLEMENTASI:
*/

let kata = "katak";
let isPalindrome = true;

for (let i = 0; i < kata.length / 2; i++) {
  if (kata[i] !== kata[kata.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome);
