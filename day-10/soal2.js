/*
Logic Challenge - Interesting Ladder Array Multidimensi
*/

/*
Objectives
    *Mampu memecahkan sebuah masalah dengan nested loop
    *Mengerti logika nested loop
    *Dapat melihat pola dari posisi baris dan kolom sebuah pola yang diberikan
    *Mampu membuat array multidimensi dari sebuah string yang diberikan

RESTRICTION Hanya boleh menggunakan built-in function .push()
*/

/*
Directions
Diberikan sebuah function ladder berisi satu parameter bertipe string

Buatlah program yang menghasilkan gambar yang menyerupai tangga dengan pola sebagai berikut:

    *kata yang paling atas adalah kata itu sendiri dengan catatan masing-masing huruf berada di indeks berbeda di satu array
    *setiap turun, huruf akan berkurang 1 dari belakang (dari value kata awal)

Output:
[
    [ 'i', 'p', 'h', 'o', 'n', 'e', '1', '4' ],
    [ 'i', 'p', 'h', 'o', 'n', 'e', '1' ],
    [ 'i', 'p', 'h', 'o', 'n', 'e' ],
    [ 'i', 'p', 'h', 'o', 'n' ],
    [ 'i', 'p', 'h', 'o' ],
    [ 'i', 'p', 'h' ],
    [ 'i', 'p' ],
    [ 'i' ],
  ]

*/

/*
ALGORITMA:
1.Memulai Program
2.Buat variabel word yang berisi kata yang akan digunakan.
3.Buat variabel result yang akan digunakan untuk menyimpan hasil tangga.
4.Loop i dari panjang word hingga 1 (termasuk 1):
    *Buat variabel row sebagai array kosong.
    *Loop j dari 0 hingga i - 1:
        *Push karakter word[j] ke dalam array row.
    *Push array row ke dalam array result.
5.Kembalikan result.
6.Selesai.
*/

/*
PSEUDOCODE:
START
function ladder(word)
  result = []
  for i from length of word down to 1
    row = []
    for j from 0 to i - 1
      push word[j] to row
    push row to result
  return result
End function
Display output
END
*/

/*
IMPLEMENTASI:
*/

function ladder(word) {
  const result = [];

  for (let i = word.length; i > 0; i--) {
    const row = [];
    for (let j = 0; j < i; j++) {
      row.push(word[j]);
    }
    result.push(row);
  }
  return result;
}

console.log(ladder("iphone14"));
