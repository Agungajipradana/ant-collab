/*
Asterisk Looping
*/

/*
Objectives
    *Mampu memecahkan sebuah masalah dengan nested loop
    *Mengerti logika nested loop
    *Dapat melihat pola dari posisi baris dan kolom Asterisk
*/

/*
Directions
RESTRICTION Tidak boleh menggunakan built-in function apapun
*/

// ---------------------------------------------------------------------------------------------------------------

/*

1.Menyusun Barisan Bintang

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

let rows1; // input the number of rows

// do loops to display asterisks in the console.
Output
jika rows1 = 5

*
*
*
*
*

*/

/*
ALGORITMA:
1.Memulai Program
2.Inisialisasi variabel "rows1" dengan jumlah baris yang diinginkan.
3.Lakukan loop dari 0 hingga kurang dari "rows1".
4.Cetak bintang "*" ke konsol.
5.Tambahkan nilai "i" sebanyak 1.
7.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize rows1 with the desired number of rows
Repeat for i from 0 to less than rows1
   Print "*"
   Add 1 to i
End
*/

/*
IMPLEMENTASI:
*/

let rows1 = 5;

for (let i = 0; i < rows1; i++) {
  console.log("*");
}

// ----------------------------------------------------------------------------------------------------------------

/*
2. Menyusun Barisan Bintang Dengan Nested Looping
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

let rows2; // input the number of rows

// do loops to display asterisks in the console.
Output
jika rows2 = 5

*****
*****
*****
*****
*****
*/

/*
ALGORITMA:
1.Memulai Program
2.Tetapkan nilai "rows2" sebagai jumlah baris yang diinginkan
3.Untuk setiap nilai "i" dari 0 hingga kurang dari "rows2"
    *Inisialisasi variabel "line" dengan string kosong
4.Untuk setiap nilai "j" dari 0 hingga kurang dari "rows2"
    *Tambahkan karakter "*" ke variabel "line"
5.Cetak nilai variabel "line" ke konsol
6.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize rows2 with the desired number of rows
FOR each i FROM 0 TO LESS THAN rows2, DO
   Initialize line as an empty string
   FOR each j FROM 0 TO LESS THAN rows2, DO
   Add "*" to the line
   PRINT line to the console
End
*/

/*
IMPLEMENTASI:
*/

let rows2 = 5;
for (let i = 0; i < rows2; i++) {
  let line = "";
  for (let j = 0; j < rows2; j++) {
    line += "*";
  }
  console.log(line);
}

// ----------------------------------------------------------------------------------------------------------------

/*
3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

Skeleton Code
let rows3; // input the number of rows

// do loops to display asterisks in the console.
Output
jika rows3 = 5

*
**
***
****
*****

*/

/*
ALGORITMA:
1.Memulai Program
2.Tetapkan nilai "rows3" sebagai jumlah baris yang diinginkan
3.Ulangi "i" dari 0 hingga kurang dari "rows3"
    *Inisialisasi variabel "line" dengan string kosong
4.Ulangi "j" dari 0 hingga kurang dari atau sama dengan "i"
    *Tambahkan karakter "*" ke variabel "line"
5.Cetak nilai variabel "line" ke konsol
6.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize rows3 with the desired number of rows
FOR each i FROM 0 TO LESS THAN rows3, DO
   Initialize line as an empty string
   FOR each j FROM 0 TO LESS THAN i, DO
   Add "*" to the line
   PRINT line to the console
End
*/

/*
IMPLEMENTASI:
*/

let rows3 = 5;

for (let i = 0; i < rows3; i++) {
  let line = "";
  for (let j = 0; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

// ----------------------------------------------------------------------------------------------------------------

/*
4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, jumlah bintang sesuai dengan value dari letiabel rows4. Baris kedua jumlah bintang berkurang 1, dan seterusnya hingga bintang hanya sisa 1. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

Skeleton Code
let rows4; // input the number of rows

// do loops to display asterisks in the console.
Output
jika rows4 = 5

*****
****
***
**
*

*/

/*
ALGORITMA:
1.Memulai Program
2.Tetapkan nilai "rows4" sebagai jumlah baris yang diinginkan
3.Ulangi "i" dari nilai "rows4" ke 1
    *Inisialisasi variabel "line" dengan string kosong
4.Ulangi "j" dari 0 hingga nilai "i" dikurangi 1
    *Tambahkan karakter "*" ke variabel "line"
5.Cetak nilai variabel "line" ke konsol
6.Selesai.
*/

/*
PSEUDOCODE:
START
Initialize rows4 with the desired number of rows
FOR each i FROM the value of rows4 DOWN TO 1, DO
   Initialize line as an empty string
   FOR each j FROM 0 TO i - 1, DO
   Add "*" to the line
   PRINT line to the console
End
*/

/*
IMPLEMENTASI:
*/

let rows4 = 5;

for (let i = rows4; i > 0; i--) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += "*";
  }
  console.log(line);
}
