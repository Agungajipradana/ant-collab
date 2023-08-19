/*
Logic Challenge - Mengelompokkan Angka
*/

/*
Objectives
    *Mampu memecahkan masalah yang diberikan
    *Mampu membuat array multidimensi
    *Mampu menggabungkan looping dan conditional

RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()
*/

/*
Directions

Diberikan sebuah function mengelompokkanAngka yang menerima satu parameter berupa array yang berisi angka-angka.

Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

    *kelompok pertama (baris pertama) merupakan angka-angka genap
    *kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
    *kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3

Dimana, satu angka hanya masuk ke dalam satu kelompok. Lihat Test Cases untuk detail.
*/

/*
ALGORITMA:
1.Memulai Program
2.Buat variabel arr yang akan berisi array angka
3.Hitung nilai ratio dengan membagi elemen kedua dengan elemen pertama dari arr
4.Buat tiga array kosong: even untuk angka genap, odd untuk angka ganjil, dan multiple untuk angka kelipatan ratio
5.Loop melalui setiap elemen num dalam arr:
    *Jika num adalah angka genap (habis dibagi 2), tambahkan ke array even
    *Jika num adalah angka ganjil (tidak habis dibagi 2), tambahkan ke array odd
    *Jika num adalah kelipatan dari ratio, tambahkan ke array multiple
6.Kembalikan array [even, odd, multiple] sebagai hasil keluaran
7.Selesai.
*/

/*
PSEUDOCODE:
START
Function mengelompokkanAngka(arr)
    ratio = arr[1] / arr[0]
    even = []
    odd = []
    multiple = []

    For i = 0 to length of arr
        If arr[i] % 2 equals 0
            Add arr[i] to even
        Else If arr[i] % 2 not equals 0
            Add arr[i] to odd
        End If
        If arr[i] % ratio equals 0
            Add arr[i] to multiple
        End If
    End For

    Return [even, odd, multiple] as the result
End Function

Display mengelompokkanAngka([2, 4, 6])
Display mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])
Display mengelompokkanAngka([100, 151, 122, 99, 111])
Display mengelompokkanAngka([])
END
*/

/*
IMPLEMENTASI:
*/

function mengelompokkanAngka(arr) {
  const ratio = arr[1] / arr[0];
  const even = [];
  const odd = [];
  const multiple = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
    if (arr[i] % ratio === 0) {
      multiple.push(arr[i]);
    }
  }
  return [even, odd, multiple];
}

console.log(mengelompokkanAngka([2, 4, 6]));
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
console.log(mengelompokkanAngka([]));
