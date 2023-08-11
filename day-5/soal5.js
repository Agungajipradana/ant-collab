/* 
Penyimpanan Buku
*/

/*
RESTRICTION
    *DILARANG MENGGUNAKAN BUILT IN FUNCTION DARI JAVASCRIPT
    *Hanya boleh menggunakan built-in function Math seperti Math.random, Math.ceil, Math.round, Math.floor, dll
*/

/*
Tujuan
    *Memahami struktur alur program dengan algoritma dan pseudocode perulangan
    *Dapat membuat algoritma dan pseudocode dari sebuah permasalahan kecil
*/

/*
Petunjuk

Budi memiliki beberapa buku yang ingin dia simpan di rak buku miliknya. Setiap kali Budi mendapatkan buku baru, dia akan menyimpannya di rak buku tersebut. Rak buku tersebut memiliki kapasitas maksimum untuk menyimpan 10 buku. Jika sudah mencapai kapasitas maksimum, Budi tidak bisa menyimpan buku baru hingga ada buku yang diambil atau diambil dari rak.

Buatlah algoritma & pseudocode perulangan dari permasalahan Budi!
*/

/*
Petunjuk Tambahan

Anda dapat menggunakan perulangan untuk mengatur proses penyimpanan dan pengambilan buku dari rak.
*/

/*
Contoh Output
...
Budi memiliki 8 buku di rak buku.
Budi menyimpan buku baru ke rak buku.
Budi memiliki 9 buku di rak buku.
Budi menyimpan buku baru ke rak buku.
Budi memiliki 10 buku di rak buku.
Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru.
...
*/

/*
* ALGORITMA:
1.Memulai Program
2.Inisialisasi variabel "i" dengan nilai awal 1.
3.Loop dari 1 hingga 10 menggunakan variabel "i".
4.Pada setiap iterasi
    *Tampilkan pesan "Budi memiliki i buku di rak buku"
    *Tambahkan 1 pada nilai "i"
5.Setelah loop selesai, tampilkan pesan "Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru".
6.Selesai
*/

/*
* PSEUDOCODE:
START
FOR i = 1 TO 10
    DISPLAY "Budi memiliki " + i + " buku di rak buku"
END FOR

DISPLAY "Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru"
END 
*/

for (let i = 1; i <= 10; i++) {
  console.log("Budi memiliki " + i + " buku di rak buku");
}

console.log("Rak buku sudah penuh, Budi tidak apat menyimpan buku baru");
