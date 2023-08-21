/*
Logic Challenge: Deep Sum
*/

/*
Objectives
    *Mampu mengakses array Multidimensi
RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()
*/

/*
Directions
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array

Contoh inputan array:

[
  [
    [1, 2, 3],
    [1, 2, 3]
  ],
  [
    [1, 2, 3],
    [1, 2],
    [1]
  ]
]
Maka akan menghasilkan output: 22

Level kedalaman array akan di-asumsikan selalu 3, [ [ [ ] ] ], jika yang diberikan adalah array kosong maka kembalikan nilai 'No number'
*/

/*
ALGORITMA:
1.Memulai Program
2.Inisialisasi variabel totalSum dengan nilai 0.
3.Loop melalui setiap elemen dalam array utama (arr), indeks pertama (i).
    *Pada setiap iterasi i, lakukan loop melalui elemen dalam array kedua (arr[i]), indeks kedua (j).
        *Pada setiap iterasi j, lakukan loop melalui elemen dalam array ketiga (arr[i][j]), indeks ketiga (k).
            *Tambahkan nilai arr[i][j][k] ke dalam totalSum.
4.Setelah selesai looping, periksa apakah totalSum sama dengan 0.
    *Jika ya, return "No Number".
5.Jika tidak, return totalSum.
6.Selesai.
*/

/*
PSEUDOCODE:
START
function deepSum(arr)
  totalSum = 0

  for i = 0 to arr.length - 1
    for j = 0 to arr[i].length - 1
      for k = 0 to arr[i][j].length - 1
        totalSum = totalSum + arr[i][j][k]
      
  if totalSum equals 0
    return "No Number"
  
  return totalSum

END
*/

/*
IMPLEMENTASI:
*/

function deepSum(arr) {
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        totalSum += arr[i][j][k];
      }
    }
  }
  if (totalSum === 0) {
    return "No Number";
  }
  return totalSum;
}

console.log(
  deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3],
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90],
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10],
    ],
  ])
);

console.log(deepSum([[[20, 10], [15], [1, 1]], [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]], [[3, 5, 1], [1, 5, 3], [1]], [[2]]]));

console.log(deepSum([]));
