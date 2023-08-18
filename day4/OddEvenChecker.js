// ALGORITMA:
// 1.Memulai Program
// 2.Membuat variabel let angka dan user memasukan angka
// 3.Membuat sebuah kondisi "IF-ELSE" jika angka habis dibagi 2 sama dengan 0 tampilkan "Angka adalah bilangan Genap"
// 4.Membuat sebuah kondisi "IF-ELSE" jika angka habis dibagi 2 tidak sama dengan 0 tampilkan "Angka adalah bilangan Ganjil"
// 5.Menampilkan pesan di console browser hasil dari variabel let angka

// PSEUDOCODE:
// START
// INPUT angka
// IF angka % 2 === 0
//      DISPLAY "Angka adalah bilangan Genap"
// ELSE IF angka % 2 !== 0
//      DISPLAY "Angka adalah bilangan Ganjil"
// DISPLAY: angka
// END

let angka = 10 % 3;

if (angka % 2 === 0) {
  console.log("Angka adalah bilangan Genap");
} else if (angka % 2 !== 0) {
  console.log("Angka adalah bilangan Ganjil");
}

console.log(angka);
