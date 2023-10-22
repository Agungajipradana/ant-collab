/*
Logic Challenge - Interesting Ladder

Objectives
    Mampu memecahkan sebuah masalah dengan nested loop
    Mengerti logika nested loop
    Dapat melihat pola dari posisi baris dan kolom sebuah pola yang diberikan
RESTRICTION Tidak boleh menggunakan built-in function apapun
*/
/*
Directions
Diberikan sebuah variabel kata bertipe sting.

Buatlah program yang menghasilkan gambar yang menyerupai tangga dengan pola sebagai berikut:

    dasar yang paling bawah adalah kata itu sendiri
    setiap naik, huruf akan berkurang 1 dari depan (dari value kata awal) kemudian kata tersebut dibalik

Contoh 1:
let num = 'antcollab'

//output yang diharapkan
        b
       ab
      lab
    ollab
   collab
 ntcollab
antcollab
*/

let num = "antcollab";

for (let i = num.length - 1; i >= 0; i--) {
  let result = "";

  for (let j = 0; j < num.length; j++) {
    if (j >= i) {
      result += num[j];
    } else {
      result += " ";
    }
  }
  console.log(result);
}
