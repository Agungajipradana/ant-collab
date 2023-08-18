/*
Logic Challenge - Palindrome Angka
*/

/*
Objectives
    Mampu memecahkan masalah yang diberikan
    Mampu menggabungkan konsep looping/iteration dan conditional didalam sebuah masalah
    Mampu mengubah/convert tipe data string ke number ataupun sebaliknya
    Mampu membedakan penggunaan while dan for
    Mampu memberhentikan sebuah loop menggunakan break

RESTRICTION Hanya boleh menggunakan built-in function untuk mengkonversi tipe data, seperti toString(), Number(), dll
*/

/*
Directions
Diberikan sebuah variabel angka bertipe number.

Buatlah program yang menampilkan angka palindrome selanjutnya dari angka yang diberikan.

Contoh jika angka bernilai 27 maka outputnya adalah 33 karena angka 33 merupakan angka palindrome.

penjelasan:

setelah angka 27, adalah:

    28 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
    29 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
    30 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
    31 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
    32 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
    33 angka palindrome. Karena angka palindrome telah ditemukan maka loop harus berhenti dan menampilkan angka 33

Contoh 1:
let angka = 10

maka output yang dihasilkan adalah 11

Contoh 2:
let angka = 175

maka output yang dihasilkan adalah 181
*/

/*
ALGORITMA:
1.Memulai Program
2.Konversi angka "num" menjadi string menggunakan fungsi "String(num)", dan simpan hasilnya dalam variabel "numStr".
3.Hitung panjang string numStr dan simpan dalam variabel length.
4.Buat sebuah loop dengan variabel "i" berjalan dari 0 hingga kurang dari "length / 2".
    *Di dalam loop, bandingkan karakter pada "numStr[i]" dengan karakter pada "numStr[length - 1 - i]".
    *Jika karakter tidak sama, kembalikan nilai "false" sebagai hasil dari fungsi.
5.Jika loop selesai, kembalikan nilai "true" sebagai hasil dari fungsi "isPalindrome".
6.Buatlah sebuah fungsi bernama "findNextPalindrome" yang menerima parameter "startNum".
7.Inisialisasi variabel "num" dengan nilai "startNum + 1".
8.Buat sebuah loop tak terbatas dengan "while (true)".
    *Di dalam loop, panggil fungsi "isPalindrome" dengan nilai "num".
    *Jika hasilnya "true", kembalikan nilai "num" sebagai hasil dari fungsi "findNextPalindrome".
    *Jika tidak, tambahkan 1 ke "num".
9.Di luar loop, inisialisasi variabel "angka" dengan nilai yang diinginkan.
10.Panggil fungsi "findNextPalindrome" dengan nilai "angka" dan simpan hasilnya dalam variabel "nextPalindrome".
Tampilkan nilai "nextPalindrome" menggunakan "console.log()".
11.Selesai.
*/

/*
PSEUDOCODE:
START
Function isPalindrome(num)
    numStr = Convert num to string
    length = Length of numStr

    For i = 0 to (length / 2) - 1
        If numStr[i] is not equal to numStr[length - 1 - i]
            Return false
        End If
    End For

    Return true
End Function

Function findNextPalindrome(startNum)
    num = startNum + 1

    While true
        If isPalindrome(num) is true
            Return num
        End If
        Increment num by 1
    End While
End Function
END
*/

/*
IMPLEMENTASI:
*/

function isPalindrome(num) {
  const numStr = String(num);
  const length = numStr.length;

  for (let i = 0; i < length / 2; i++) {
    if (numStr[i] !== numStr[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function findNextPalindrome(startNum) {
  let num = startNum + 1;
  while (true) {
    if (isPalindrome(num)) {
      return num;
    }
    num++;
  }
}

let angka = 10;
let nextPalindrome = findNextPalindrome(angka);
console.log(nextPalindrome);
