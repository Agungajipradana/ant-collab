/*
Pencarian Buku
*/

/*
Tujuan
    * Mengerti cara menggunakan If-Else
    * Mengerti logika If-Else
    * Mengerti cara menggunakan operator evaluasi ===, !==
*/
/*
Petunjuk
*/

/* 
Seorang pengunjung perpustakaan direpresentasikan dalam JavaScript dengan memiliki variable nama, usia, dan jumlahUang. Pengunjung tersebut datang ke perpustakaan untuk mencari buku yang dia inginkan, namun perpustakaan memiliki kondisi sebagai berikut:

    1. Jika nama dari pengunjung kosong, tampilkan di console "Anda tidak dapat mencari buku. Silakan isi nama anda terlebih dahulu." dan program selesai.
    2. Jika usia dari pengunjung kurang dari 10 tahun, maka dia hanya boleh mencari buku cerita anak-anak. Jika usia 10 tahun ke atas, dia boleh mencari buku apapun.
    3. Jika jumlahUang yang dimiliki kurang dari 100000, maka tampilkan di console "Maaf, uang anda tidak mencukupi untuk mencari buku. Anda harus pulang.". Jika uang cukup, tampilkan "Anda dapat mencari buku. Sisa uang anda: [...]", dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga buku yang ingin dicari.
Buatlah pseudocode dan programnya!

RESTRICTION : Tidak boleh menggunakan built-in function apapun.
*/

/*
* ALGORITMA:
1.Memulai Program
2.Membuat sebuah variabel var nama,usia, dan jumlahUang
3.Membuat sebuah kondisi "IF - ELSE untuk mengecek apakah "nama" adalah kosong
    * Jika variabel nama = " " (kosong) tampilkan "Anda tidak dapat mencari buku. Silakan isi nama anda terlebih dahulu."
    * Jika tidak lanjut ke langkah 4
4.Membuat sebuah kondisi "IF - ELSE untuk mengecek usia
    * Jika usia < (kurang dari) 10 tampilkan "hanya boleh mencari buku cerita anak-anak"
    * Jika tidak, tampilkan "Silahkan mencari buku"
5.Inisialisasi variabel hargaBuku dengan 125000.
6.Cek apakah jumlahUang lebih kecil dari hargaBuku:
    * Jika iya, tampilkan pesan "Maaf, uang anda tidak mencukupi untuk mencari buku. Anda harus pulang."
    * Jika tidak, lanjutkan ke langkah 7.
7.Hitung sisa uang dengan mengurangkan hargaBuku dari jumlahUang.
8.Tampilkan pesan "Anda dapat mencari buku. Sisa uang anda: sisaUang".
9.Selesai
*/

/*
* PSEUDOCODE:
START
SET nama TO "Galang"
  SET usia TO 25
  SET jumlahUang TO 150000

  IF nama is an empty string
    DISPLAY "Anda tidak dapat mencari buku. Silakan isi nama anda terlebih dahulu."
  ELSE
    IF usia < 10
      DISPLAY "Hanya boleh mencari buku cerita anak-anak"
    ELSE
      DISPLAY "Silahkan mencari buku"
    END IF
  END IF

  SET hargaBuku TO 125000

  IF jumlahUang < hargaBuku
    DISPLAY "Maaf, uang anda tidak mencukupi untuk mencari buku. Anda harus pulang."
  ELSE
    SET sisaUang TO jumlahUang - hargaBuku
    DISPLAY "Anda dapat mencari buku. Sisa uang anda: " concatenated with sisaUang
  END IF
END
*/

/*
 * IMPLEMENTASI:
 */

var nama = "Galang";
var usia = 25;
var jumlahUang = 150000;

// Mengecek nama dan usia
if (nama === " ") {
  console.log("Anda tidak dapat mencari buku. Silakan isi nama anda terlebih dahulu.");
} else {
  if (usia < 10) {
    console.log("hanya boleh mencari buku cerita anak-anak");
  } else {
    console.log("Silahkan mencari buku");
  }
}

// Mengecek harga
let hargaBuku = 125000;

if (jumlahUang < hargaBuku) {
  console.log("Maaf, uang anda tidak mencukupi untuk mencari buku. Anda harus pulang.");
} else {
  let sisaUang = jumlahUang - hargaBuku;
  console.log(`Anda dapat mencari buku. Sisa uang anda: ${sisaUang} `);
}
