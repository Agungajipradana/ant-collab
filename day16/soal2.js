// Logic Challenge - Cari Median!

/*
Objectives
Mampu menyelesaikan masalah yang diberikan
RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll
*/

/*
Directions
Diberikan sebuah function cariMedian yang menerima sebuah array kumpulan angka.

Function akan me-return median dari deret angka tersebut.

Median adalah nilai tengah dari sebuah deret bilangan.

Contoh, median atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut.

Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah. Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).
*/

function cariMedian(arr) {
  // Mengurutkan array
  arr.sort(function (a, b) {
    return a - b;
  });

  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    // Jika panjang array genap, ambil rata-rata dari dua nilai tengah
    const middle1 = arr[middleIndex];
    const middle2 = arr[middleIndex - 1];
    return (middle1 + middle2) / 2;
  } else {
    // Jika panjang array ganjil, ambil nilai tengah
    return arr[middleIndex];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
