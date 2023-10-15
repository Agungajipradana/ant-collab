// Logic Challenge - Shape Of I
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

Buatlah program yang menghasilkan gambar menyerupai huruf I dengan pola sebagai berikut
*/

// Contoh 1:
let num = 5;

if (num < 4 || num > 10) {
  console.log("Invalid number");
} else {
  for (let i = 1; i <= num; i++) {
    let row = "";

    if (i === 1 || i === num) {
      // Membuat baris pertama dan terakhir berisi '#'
      for (let j = 1; j <= num; j++) {
        row += "#";
      }
    } else {
      // Membuat baris tengah berisi karakter '|'
      row = "|";
    }

    console.log(row);
  }
}

/*output yang diharapkan
#####
  |
  |
  |
#####
*/

// Contoh 2:
let nums = 6;

if (nums < 4 || nums > 10) {
  console.log("Invalid number");
} else {
  for (let i = 1; i <= nums; i++) {
    let row = "";

    if (i === 1 || i === nums) {
      // Membuat baris pertama dan terakhir berisi '#'
      for (let j = 1; j <= nums; j++) {
        row += "#";
      }
    } else {
      // Membuat baris tengah berisi karakter '||'
      row = "||";
    }

    console.log(row);
  }
}

/*output yang diharapkan
######
  ||
  ||
  ||
  ||
######
*/

// contoh 3:
let number = 7;

if (number < 4 || number > 10) {
  console.log("Invalid number");
} else {
  for (let i = 1; i <= number; i++) {
    let row = "";

    if (i === 1 || i === number) {
      // Membuat baris pertama dan terakhir berisi '#'
      for (let j = 1; j <= number; j++) {
        row += "#";
      }
    } else {
      // Membuat baris tengah berisi karakter '|'
      row = "|";
    }

    console.log(row);
  }
}

/*output yang diharapkan
#######
   |
   |
   |
   |
   |
#######
*/

/*
NOTES

Jika value/nilai dari num kurang dari 4 dan lebih dari 10 maka tampilkan "Invalid number"
*/
