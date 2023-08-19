/*
Logic Challenge - Target Terdekat
*/

/*
Objectives
    *Mampu memecahkan masalah yang diberikan
    *Mampu mengakses sebuah array dalam sebuah looping kemudian mengecek nilai tersebut sesuai dengan masalah yang dihadapi

RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()
*/

/*
Directions
Diberikan sebuah function targetTerdekat yang menerima satu parameter berupa array yang terdiri dari karakter.

Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.

ASUMSI

Karakter 'o' pasti akan selalu ada dan hanya akan ada 1

Contoh 1:
jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

*/

/*
ALGORITMA:
1.Memulai Program
2.Loop melalui array arr:
    *Jika nilai pada indeks saat ini adalah 'o', tetapkan indexOfO dengan nilai indeks saat ini.
    *Jika nilai pada indeks saat ini adalah 'x', hitung jarak antara indexOfO dan indeks saat ini.
      *Jika jarak lebih kecil dari minDistance, tetapkan minDistance dengan jarak tersebut.
3.Jika minDistance masih sama dengan nilai tak terbatas positif, return 0 (tidak ditemukan 'x').
4.Jika minDistance memiliki nilai, return minDistance.
5.Selesai.
*/

/*
PSEUDOCODE:
START
function targetTerdekat(arr)
    indexOfO = -1
    minDistance = INFINITY
    
    for i = 0 to arr.length - 1
        if arr[i] equals 'o'
            indexOfO = i
        else if arr[i] equals 'x'
            distance = absolute value of (indexOfO - i)
            if distance < minDistance
                minDistance = distance
                
    if minDistance equals INFINITY
        return 0
    else
        return minDistance
End Function

Display targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])
Display targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])
Display targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])
Display targetTerdekat([" ", " ", "o", " "])
Display targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])
END
*/

/*
IMPLEMENTASI:
*/

function targetTerdekat(arr) {
  let indexOf0 = -1;
  let minDistance = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === "o") {
      indexOf0 = i;
    } else if (arr[i] === "x") {
      const distance = Math.abs(indexOf0 - i);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
  }

  if (minDistance === Infinity) {
    return 0;
  } else {
    return minDistance;
  }
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"]));
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"]));
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "]));
console.log(targetTerdekat([" ", " ", "o", " "]));
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"]));
