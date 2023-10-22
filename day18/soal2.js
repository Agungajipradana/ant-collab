/*
Logic Challenge - Mengelompokkan Hewan!

Objectives
    Mampu menyelesaikan masalah yang diberikan
RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll
*/

/*
Directions
Diberikan sebuah function groupAnimals yang menerima satu parameter berupa array yang berisi string.

Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika hewan adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/

function groupAnimals(animals) {
  // Membuat objek untuk mengelompokkan hewan berdasarkan huruf depannya
  let animalGroups = {};

  // Mengelompokkan hewan berdasarkan huruf depannya
  for (let i = 0; i < animals.length; i++) {
    let initial = animals[i][0];
    if (!animalGroups[initial]) {
      animalGroups[initial] = [];
    }
    animalGroups[initial].push(animals[i]);
  }

  // Mengambil kunci huruf awal dari objek
  let keys = Object.keys(animalGroups);

  // Mengurutkan kunci huruf awal
  keys.sort();

  // Menghasilkan array hasil pengelompokan
  let result = [];
  for (let i = 0; i < keys.length; i++) {
    result.push(animalGroups[keys[i]]);
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
