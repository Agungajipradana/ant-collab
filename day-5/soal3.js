/*
Permainan Tebak Angka
*/

/*
Tujuan

    * Mengerti Cara Menggunakan Switch-Case
    * Mengerti Logika Switch-Case
    * Menggunakan fungsi bawaan Math dari JavaScript
*/
/*
RESTRICTION

    * DILARANG MENGGUNAKAN BUILT IN FUNCTION DARI JAVASCRIPT
    * Hanya boleh menggunakan built-in function Math seperti Math.random, Math.ceil, Math.round, Math.floor, dll
*/
/*
Petunjuk

Dalam permainan tebak angka ini, seorang pemain dapat menekan tombol untuk mengacak angka 1 - 5.

Jika pemain mendapatkan angka:

    1.Akan menampilkan "Coba lagi ya."
    2.Akan mendapatkan jumlah kupon/karcis sebanyak 5 dan menampilkan "Selamat kamu mendapatkan kupon sebanyak 5."
    3.Akan mendapatkan jumlah kupon/karcis sebanyak 15 dan menampilkan "Selamat kamu mendapatkan kupon sebanyak 15."
    4.Akan mendapatkan jumlah kupon/karcis sebanyak 50 dan menampilkan "Selamat kamu mendapatkan kupon sebanyak 50."
    5.Akan mendapatkan jumlah kupon/karcis sebanyak 100 dan menampilkan "WOW, kamu menang jackpot! Selamat!!"

Buatlah pseudocode dan implementasikan menggunakan SWITCH-CASE.
*/

/*
* ALGORITMA:
1.Memulai Program
2.Generate sebuah angka acak antara 1 hingga 5 menggunakan Math.random() dan Math.floor().
3.Evaluasi angka yang dihasilkan menggunakan switch case.
4.Tampilkan pesan sesuai dengan nilai angka.
5.Jika angka tidak berada dalam rentang 1 hingga 5, tampilkan pesan kesalahan.
6.Selesai
*/

/*
* PSEUDOCODE:
START
Generate angka acak antara 1 hingga 5 dan simpan ke dalam variabel "angka".
SWITCH angka DO
   - CASE 1:
       Tampilkan "Selamat kamu mendapatkan kupon sebanyak 5."
   - CASE 2:
       Tampilkan "Selamat kamu mendapatkan kupon sebanyak 15."
   - CASE 3:
       Tampilkan "Selamat kamu mendapatkan kupon sebanyak 50."
   - CASE 4:
       Tampilkan "WOW, kamu menang jackpot! Selamat!!"
   - CASE 5:
       Tampilkan "Coba lagi ya."
   - DEFAULT:
       Tampilkan "Angka harus 1 hingga 5"
END SWITCH
*/

let angka = Math.floor(Math.random() * 5) + 1;

switch (angka) {
  case 1:
    console.log("Selamat kamu mendapatkan kupon sebanyak 5.");
    break;
  case 2:
    console.log("Selamat kamu mendapatkan kupon sebanyak 15.");
    break;
  case 3:
    console.log("Selamat kamu mendapatkan kupon sebanyak 50.");
    break;
  case 4:
    console.log("WOW, kamu menang jackpot! Selamat!!");
    break;
  case 5:
    console.log("Coba lagi ya.");
    break;
  default:
    console.log("Angka harus 1 hingga 5");
}
