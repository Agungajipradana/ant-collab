/*
Vocal Seeker
*/

/*
Objectives
    *Mampu mengakses array multidimensi
    *Mampu membedakan type data number dan yang bukan
    *Mampu menggunakan template literals

RESTRICTION Tidak boleh menggunakan built-in function apapun dan regex
*/

/*
Directions
Diberikan sebuah function bernama seeker dimana function tersebut menerima satu paremeter array multidimensi.

Function akan mengembalikan jumlah vokal dan kumpulan vokal yang ditemukan dari array multidimensi tersebut
*/

/*
ALGORITMA:
1.Memulai Program
2.Inisialisasi variabel count dengan nilai 0 untuk menghitung jumlah vokal yang ditemukan.
3.Inisialisasi variabel vowels dengan string kosong untuk menyimpan kumpulan vokal yang ditemukan.
4.Loop melalui setiap baris i dalam array board:
    Loop melalui setiap elemen j dalam baris i dari array board:
    Periksa apakah elemen board[i][j] merupakan string:
    Jika iya, ubah huruf menjadi huruf kecil dan simpan dalam variabel lowercaseChar.
        Periksa apakah lowercaseChar adalah vokal (a, e, i, o, atau u):
        Jika iya, tambahkan 1 ke variabel count.
            Periksa apakah lowercaseChar belum ada di dalam string vowels:
            Jika iya, tambahkan lowercaseChar ke dalam variabel vowels.
5.Kembalikan string yang berisi pesan hasil dari perhitungan jumlah vokal dan kumpulan vokal yang ditemukan.
6.Selesai.
*/

/*
PSEUDOCODE:
START
Function vocalSeeker(board)
    count = 0
    vowels = ""

    For i = 0 to board.length
        For j = 0 to board[i].length
            If typeof board[i][j] is "string" Then
                lowercaseChar = Convert to lowercase (board[i][j])
                If lowercaseChar is "a" or "e" or "i" or "o" or "u" Then
                    count = count + 1
                    If lowercaseChar is not in vowels Then
                        Add lowercaseChar to vowels
                    End If
                End If
            End If
        End For
    End For

    Return "vokal ditemukan " + count + " dan kumpulan vokal adalah " + vowels
End Function

board = [
  ["*", "*", "*", 10],
  ["*", "*", -5, -10, "*", 100],
  ["a", "A", "o", "b"],
]

Display vocalSeeker(board)
END
*/

/*
IMPLEMENTASI:
*/

function vocalSeeker(board) {
  let count = 0;
  let vowels = "";

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (typeof board[i][j] === "string") {
        const lowercaseChar = board[i][j].toLowerCase();
        if (lowercaseChar === "a" || lowercaseChar === "e" || lowercaseChar === "i" || lowercaseChar === "o" || lowercaseChar === "u") {
          count++;
          if (vowels.indexOf(lowercaseChar) === -1) {
            vowels += lowercaseChar;
          }
        }
      }
    }
  }

  return `vokal ditemukan ${count} dan kumpulan vokal adalah ${vowels}`;
}

let board = [
  ["*", "*", "*", 10],
  ["*", "*", -5, -10, "*", 100],
  ["a", "A", "o", "b"],
];

console.log(vocalSeeker(board));
