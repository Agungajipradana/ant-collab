/*
SOAL 2
Diberikan sebuah variabel kata bertipe sting.

Buatlah program yang menghasilkan gambar yang menyerupai tangga dengan pola sebagai berikut:

    *dasar yang paling bawah adalah kata itu sendiri
    *setiap naik, huruf akan berkurang 1 dari depan (dari value kata awal) kemudian kata tersebut dibalik
    
Contoh 1:
let kata = 'antcollab'

//output yang diharapkan

        b
       ab
      lab
     llab
    ollab
   collab
  tcollab
 ntcollab
antcollab
*/

/*
ALGORITMA:
1.Memulai Program
2.Inisialisasi variabel kata dengan string "antcollab"
3.Loop i dari kata.length - 1 sampai 0 dengan pengurangan 1 setiap iterasi
    *Inisialisasi variabel result dengan string kosong
    *Loop j dari 0 sampai kata.length
        *Jika nilai j lebih besar dari atau sama dengan i, tambahkan karakter kata[j] ke variabel result
        *Jika tidak, tambahkan karakter spasi ke variabel result
    *Cetak nilai variabel result
4.Selesai.
*/

/*
PSEUDOCODE:
START
SET kata = "antcollab"
   FOR i = (length of kata) - 1 DOWNTO 0
      SET result = ""
      FOR j = 0 TO length of kata
         IF j >= i THEN
            result += kata[j]
         ELSE
            result += " "
         END IF
      END FOR
      PRINT result
   END FOR
END
*/

/*
IMPLEMENTASI:
*/

let kata = "antcollab";

for (let i = kata.length - 1; i >= 0; i--) {
  let result = "";

  for (let j = 0; j < kata.length; j++) {
    if (j >= i) {
      result += kata[j];
    } else {
      result += " ";
    }
  }
  console.log(result);
}
