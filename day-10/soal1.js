/*
Slice and dice!
*/

/*
Objectives
    *Mampu membuat function serupa built in function sederhana JavaScript
    *Mampu menggabungkan konsep looping/iteration dan conditional didalam sebuah masalah
    *Mampu mengakses sebuah array

RESTRICTION Hanya boleh menggunakan built-in function .push()
*/

/*
Directions
Diberikan sebuah function bernama slice dimana function tersebut menerima tiga paramter.

    *Parameter pertama bernama data bertipe array
    *Parameter kedua bernama start bertipe number (optional)
    *Parameter ketiga bernama end bertipe number (optional)

Function akan mengembalikan nilai array yang telah dipotong/slice sesuai dengan value dari paramter start dan end Array yang di return merupakan potongan array mulai dari start hingga sebelum end
*/

/*
ASUMSI:

    *variabel start bisa tidak diisi (berarti end-nya juga kosong). Jika hal ini terjadi maka pemotongan data array dimulai dari index ke 0
    *jika value variabel start lebih besar dibandingkan jumlah data array, maka function akan mengembalikan array kosong
*/

/*
ALGORITMA:
1.Memulai Program
2.Buatlah sebuah fungsi bernama slice dengan parameter data, start, dan end.
3.Jika parameter start tidak diberikan, beri nilai default 0.
4.Jika parameter end tidak diberikan, beri nilai default panjang data.
5.Inisialisasi sebuah array kosong bernama result.
6.Loop dari i sama dengan start hingga end - 1 (indeks terakhir yang diambil adalah end - 1).
    *Jika nilai i lebih besar atau sama dengan panjang data, keluar dari loop.
    *Masukkan data[i] ke dalam array result.
7.Kembalikan nilai array result.
8.Selesai.
*/

/*
PSEUDOCODE:
START
function slice(data, start, end)
    if start is not provided
        set start to 0
    if end is not provided
        set end to length of data
    create an empty array called result
    
    for i from start to end - 1
        if i is greater than or equal to length of data
            break
        add data[i] to result
    
    return result
End function
END
*/

/*
IMPLEMENTASI:
*/

function slice(data, start, end) {
  if (!start) start = 0;
  if (!end) end = data.length;
  const result = [];

  for (let i = start; i < end; i++) {
    if (i >= data.length) break;
    result.push(data[i]);
  }
  return result;
}

console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2, 4));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 1, 5));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"]));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 20));
