/*
Sitting Arrangement
*/

/*
Objectives
    *Mampu membuat array multidimensi
    *Mampu mengakses array 1 dimensi
    *Mampu menggunakan while condition dan nested loop

RESTRICTION Hanya boleh menggunakan built-in function .push()
*/

/*
Directions
Diberikan sebuah function bernama sittingArrangement dimana function tersebut menerima dua paramter.

    *Parameter pertama bernama person bertipe array
    *Parameter kedua bernama column bertipe number

Function akan mengembalikan array multidimensi yang mengatur tempat duduk berdasarkan jumlah column. Dimana jika orang tidak cukup untuk mengisi column tersebut maka diisi dengan value 'Kursi Kosong'

ASUMSI:

    *variabel column harus minimal bernilai 1, jika kurang dari itu maka tuliskan 'Invalid number'
*/

/*
ALGORITMA:
1.Memulai Program
2.Buat function sittingArrangement dengan parameter person (array) dan column (number).
3.Cek apakah column kurang dari 1:
    *Jika ya, return "Invalid Number"
4.Buat variabel result sebagai array kosong untuk menyimpan hasil pengaturan tempat duduk.
5.Buat variabel currentIndex dan set nilainya menjadi 0.
6.Lakukan loop while dengan kondisi currentIndex kurang dari panjang array person:
    *Buat variabel row sebagai array kosong untuk mewakili baris tempat duduk pada kolom yang sedang diproses.
    *Lakukan loop for sebanyak column kali:
        *Cek apakah currentIndex kurang dari panjang array person:
            *Jika ya, tambahkan orang pada indeks currentIndex ke dalam array row, kemudian tingkatkan nilai currentIndex dengan 1.
            *Jika tidak, tambahkan "Kursi Kosong" ke dalam array row.
    *Tambahkan array row ke dalam array result.
7.Return result.
8.Selesai.
*/

/*
PSEUDOCODE:
START
function sittingArrangement(person, column)
    if column < 1
        return "Invalid Number"
    
    result <- empty array
    currentIndex <- 0

    while currentIndex < length of person
        row <- empty array

        for i <- 0 to column - 1
            if currentIndex < length of person
                add person[currentIndex] to row
                increment currentIndex by 1
            else
                add "Kursi Kosong" to row
        
        add row to result
    
    return result
End function
END
*/

/*
IMPLEMENTASI:
*/

function sittingArrangement(person, column) {
  if (column < 1) {
    return "Invalid Number";
  }

  const result = [];
  let currentIndex = 0;

  while (currentIndex < person.length) {
    const row = [];

    for (let i = 0; i < column; i++) {
      if (currentIndex < person.length) {
        row.push(person[currentIndex]);
        currentIndex++;
      } else {
        row.push("Kursi Kosong");
      }
    }
    result.push(row);
  }
  return result;
}

console.log(sittingArrangement(["A", "B", "C"], 0));
console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji"], 2));
console.log(sittingArrangement(["Yosia", "Asrawi", "Andru"], 3));
console.log(sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion"], 4));
