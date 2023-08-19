/*
Logic Challenge - Deret Geometri
*/

/*
Objectives
    *Melatih kembali pengetahuan kamu dalam mengakses sebuah array
    *Mampu menggabungkan looping dan conditional
    *Mampu membandingkan nilai array satu dengan nilai array disebelah kanannya dengan menggunakan index

RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()
*/

/*
Directions
    *Diberikan sebuah function tentukanDeretGeometriyang menerima satu parameter berupa array yang terdiri dari angka.
    *Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri.
    *Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian.

Contoh 1:
[1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3

Contoh 2:
[1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).
*/

/*
ALGORITMA:
1.Memulai Program
2.Buatlah sebuah fungsi bernama tentukanDeretGeometri yang menerima satu parameter berupa array bernama arr.
3.Cek panjang array arr, jika panjangnya kurang dari atau sama dengan 1, kembalikan false karena deret dengan 4.4.4.kurang dari 2 elemen bukan deret geometri.
5.Hitung rasio geometri dengan membagi elemen kedua dengan elemen pertama dan simpan dalam variabel ratio.
6.Loop melalui array arr dimulai dari indeks 1 hingga panjang array.
    *Dalam loop, cek apakah nilai elemen saat ini tidak sama dengan nilai elemen sebelumnya dikali dengan ratio, jika tidak sama, kembalikan false.
7.Jika semua nilai elemen telah diperiksa dan memenuhi rasio geometri, kembalikan true.
8.Selesai.
*/

/*
PSEUDOCODE:
START
Function tentukanDeretGeometri(arr)
    If length of arr <= 1 Then
        Return false
    End If

    Set ratio = arr[1] / arr[0]

    For i = 1 To length of arr
        If arr[i] ≠ arr[i - 1] * ratio Then
            Return false
        End If
    End For

    Return true
End Function

Display tentukanDeretGeometri([1, 3, 9, 27, 81])
Display tentukanDeretGeometri([2, 4, 8, 16, 32])
Display tentukanDeretGeometri([2, 4, 6, 8])
Display tentukanDeretGeometri([2, 6, 18, 54])
Display tentukanDeretGeometri([1, 2, 3, 4, 7, 9])
END
*/

/*
IMPLEMENTASI:
*/

function tentukanDeretGeometri(arr) {
  if (arr.length <= 1) {
    return false;
  }

  const ratio = arr[1] / arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] * ratio) {
      return false;
    }
  }
  return true;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));
console.log(tentukanDeretGeometri([2, 4, 6, 8]));
console.log(tentukanDeretGeometri([2, 6, 18, 54]));
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]));
