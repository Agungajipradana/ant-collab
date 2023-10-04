// Logic Challenge - Angka Prima!

/*
Objectives
Mampu menyelesaikan masalah yang diberikan
RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll
*/

/*
Directions
Diberikan sebuah function angkaPrima yang menerima satu parameter berupa angka.

Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
*/

function angkaPrima(angka) {
  if (angka <= 1) {
    return false; // Angka kurang dari atau sama dengan 1 bukan bilangan prima
  } else if (angka <= 3) {
    return true; // Angka 2 dan 3 adalah bilangan prima
  } else if (angka % 2 === 0 || angka % 3 === 0) {
    return false; // Angka yang habis dibagi 2 atau 3 bukan bilangan prima
  }

  let i = 5;
  while (i * i <= angka) {
    if (angka % i === 0 || angka % (i + 2) === 0) {
      return false; // Angka yang habis dibagi i atau i + 2 bukan bilangan prima
    }
    i += 6; // Meningkatkan i dengan 6 (2 langkah setelah 5)
  }

  return true; // Jika angka melewati semua uji coba di atas, itu adalah bilangan prima
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
