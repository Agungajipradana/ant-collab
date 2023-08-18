/*
Deret Bilangan Prima
*/

/*
RESTRICTION
    *DILARANG MENGGUNAKAN BUILT IN FUNCTION DARI JAVASCRIPT
    *Hanya boleh menggunakan built-in function Math seperti Math.random, Math.ceil, Math.round, Math.floor, dll
*/

/*
Tujuan
    *Mengerti cara menggunakan for
    *Mengerti cara menggunakan modulus operator
    *Mengenali bilangan prima
*/

/*
Petunjuk

Pada tugas ini, kamu diminta untuk melakukan looping dengan menggunakan syntax for dalam JavaScript. Tampilkan semua bilangan prima dari 1 hingga 50. Sebuah bilangan dikatakan bilangan prima jika hanya dapat dibagi oleh angka 1 dan dirinya sendiri.
*/

/*
Hints
Gunakan perulangan untuk mengecek apakah angka tersebut merupakan bilangan prima atau bukan dengan menggunakan modulus operator

Bilangan prima antara 1 hingga 50 adalah:
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
*/

/*
* ALGORITMA:
1.Memulai Program
2.Loop dari 2 hingga 50 menggunakan variabel "i".
3.Pada setiap iterasi, set variabel isPrime menjadi true (asumsi awal bahwa i adalah bilangan prima).
4.Loop dari 2 hingga "i-1" menggunakan variabel "num"
    *Jika "i" dapat dibagi dengan "num" tanpa sisa, maka "i" bukan bilangan prima, atur "isPrime" menjadi "false" dan keluar dari loop.
5.Setelah loop selesai, periksa nilai "isPrime".
    *Jika "isPrime" adalah "true", tampilkan "i" sebagai bilangan prima.
6.Ulangi langkah 1 hingga 4 untuk semua nilai "i" dari 2 hingga 50.
7.Selesai
*/

/*
* PSEUDOCODE:
START
FOR i = 2 TO 50
    SET isPrime = true
    FOR num = 2 TO i - 1
        IF i MOD num = 0 THEN
            SET isPrime = false
            BREAK
        END IF
    END FOR
    IF isPrime = true THEN
        DISPLAY i
    END IF
END FOR
END 
*/

for (let i = 2; i <= 50; i++) {
  let isPrime = true;

  for (let num = 2; num < i; num++) {
    if (i % num === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
