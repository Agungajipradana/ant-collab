// Logic Challenge - Triangle

/*
Objectives
Mampu memecahkan sebuah masalah dengan nested loop
Mengerti logika nested loop
Dapat melihat pola dari posisi baris dan kolom Asterisk
RESTRICTION Tidak boleh menggunakan built-in function apapun
*/

/*
Directions
Diberikan sebuah variabel num bertipe number.

Buatlah program yang menghasilkan gambar segitiga dengan pola sebagai berikut
*/

// Contoh 1:
let num = 3;

for (let i = 1; i <= num; i++) {
  let row = "";

  // Membuat spasi sebanyak (num - i)
  for (let j = 1; j <= num - i; j++) {
    row += " ";
  }

  // Membuat karakter 'x' dan 'o' secara bergantian
  for (let k = 1; k <= i; k++) {
    if (k % 2 === 0) {
      row += "o";
    } else {
      row += "x";
    }
  }

  console.log(row);
}

/*output yang diharapkan
  x
 xox
xoxox
*/

// Contoh 2:
let number = 6;

for (let i = 1; i <= number; i++) {
  let row = "";

  // Membuat spasi sebanyak (number - i)
  for (let j = 1; j <= number - i; j++) {
    row += " ";
  }

  // Membuat karakter 'x' dan 'o' secara bergantian
  for (let k = 1; k <= i; k++) {
    if (k % 2 === 0) {
      row += "o";
    } else {
      row += "x";
    }
  }

  console.log(row);
}

/*output yang diharapkan
     x
    xox
   xoxox
  xoxoxox
 xoxoxoxox
xoxoxoxoxox
*/
