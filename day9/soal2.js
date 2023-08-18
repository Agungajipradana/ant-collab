/*
Built in Function Challenges
*/

/*
Objectives
    *Mampu menggunakan built in function pada Array seperti .push, .shift, .unshift, dll
    *Mampu membuat function dan mengerti penggunaan parameter dari sebuah function
    *Mampu menggunakan template literals

    RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()
*/

/*
Directions

Antrian

    Diberikan sebuah function antrian yang menerima dua parameter yaitu line bertipe array dan person bertipe string. Function ini akan mengembalikan array yang dimana data array tersebut sudah bertambah diakhir array sesuai dengan parameter person.

Panggil Antrian

    Diberikan sebuah function panggilAntrian yang menerima parameter line bertipe array. Function ini akan mengembalikan array yang dimana data array tersebut berkurang 1 didepannya.

Tumpukan

    Diberikan sebuah function tumpukan yang menerima dua parameter line bertipe array dan title bertipe string. Function ini akan mengembalikan array yang dimana data array sudah bertambah diawal array sesuai dengan parameter title.

Ganjil Genap

    Diberikan sebuah function ganjilGenap yang menerima satu parameter plat bertipe string. Parameter plat berisi informasi kumpulan plat dimana nomor antar plat dipisahkan oleh titik koma(;).

Function ini akan mengembalikan keterangan jumlah plat genap dan jumlah plat ganjil.

function ganjilGenap(plat) {
  // your code here
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data
*/

//-----------------------------------------------------------------------------------------------------------------

/*
Antrian

    Diberikan sebuah function antrian yang menerima dua parameter yaitu line bertipe array dan person bertipe string. Function ini akan mengembalikan array yang dimana data array tersebut sudah bertambah diakhir array sesuai dengan parameter person.
*/

/*
ALGORITMA:
1.Memulai Program
2.Tentukan fungsi enqueue dengan parameter line (array) dan person (string).
3.Tambahkan person ke akhir array line.
4.Kembalikan nilai dari line
5.Selesai.
*/

/*
PSEUDOCODE:
START
 FUNCTION enqueue(line, person)
    line.PUSH(person)
    RETURN line
  END FUNCTION

  queue = ["Alice", "Bob", "Charlie"]
  newPerson = "David"

  newQueue = enqueue(queue, newPerson)
  OUTPUT newQueue
END
*/

/*
IMPLEMENTASI:
*/
function antrian(line, person) {
  line.push(person);
  return line;
}

const queue = ["Alice", "Bob", "Charlie"];
const newPerson = "David";

const newQueue = antrian(queue, newPerson);
console.log(newQueue);

//-----------------------------------------------------------------------------------------------------------------

/*
Panggil Antrian

    Diberikan sebuah function panggilAntrian yang menerima parameter line bertipe array. Function ini akan mengembalikan array yang dimana data array tersebut berkurang 1 didepannya.
*/

/*
ALGORITMA:
1.Memulai Program
2.Buat fungsi bernama "panggilAntrian" dengan parameter "line" bertipe array.
3.Gunakan metode "shift()" untuk menghapus elemen pertama dari array" line".
4.Kembalikan nilai dari array "line".
5.Deklarasikan array "queues" dengan elemen "Alice", "Bob", dan "Charlie".
6.Panggil fungsi "panggilAntrian" dengan argumen array "queues".
7.Cetak hasil array baru melalui console.log().
8.Selesai.
*/

/*
PSEUDOCODE:
START
FUNCTION panggilAntrian(line)
    SHIFT line
    RETURN line
END FUNCTION

DECLARE queues as Array ["Alice", "Bob", "Charlie"]

SET newQueues = CALL panggilAntrian WITH queues

DISPLAY newQueues
END
*/

/*
IMPLEMENTASI:
*/

function panggilAntrian(line) {
  line.shift();
  return line;
}

const queues = ["Alice", "Bob", "Charlie"];

const newQueues = panggilAntrian(queues);
console.log(newQueues);

// ----------------------------------------------------------------------------------------------------------------

/*
Tumpukan

    Diberikan sebuah function tumpukan yang menerima dua parameter line bertipe array dan title bertipe string. Function ini akan mengembalikan array yang dimana data array sudah bertambah diawal array sesuai dengan parameter title.
*/

/*
ALGORITMA:
1.Memulai Program
2.Buatlah sebuah fungsi bernama "tumpukan" dengan parameter "line" (array) dan "title" (string).
3.Di dalam fungsi "tumpukan", tambahkan elemen "title" di awal array "line" menggunakan metode "unshift()".
4.Kembalikan array "line" yang sudah diperbarui.
5.Akhir dari fungsi "tumpukan".
6.Buat array "stack" dengan elemen "Alice", "Bob", dan "Charlie".
7.Buat variabel "newTitle" dengan nilai "David".
8.Panggil fungsi "tumpukan" dengan argumen "stack" dan "newTitle", simpan hasilnya dalam variabel "newStack".
9.Cetak "newStack" menggunakan console.log().
10.Selesai.
*/

/*
PSEUDOCODE:
START
FUNCTION tumpukan(line, title)
    line.unshift(title)
    RETURN line
END FUNCTION

SET stack TO ["Alice", "Bob", "Charlie"]
SET newTitle TO "David"

SET newStack TO CALL tumpukan(stack, newTitle)
DISPLAY newStack
END
*/

/*
IMPLEMENTASI:
*/

function tumpukan(line, title) {
  line.unshift(title);
  return line;
}

const stack = ["Alice", "Bob", "Charlie"];
const newTitle = "David";

const newStack = tumpukan(stack, newTitle);
console.log(newStack);

//-----------------------------------------------------------------------------------------------------------------

/*
Ganjil Genap

    Diberikan sebuah function ganjilGenap yang menerima satu parameter plat bertipe string. Parameter plat berisi informasi kumpulan plat dimana nomor antar plat dipisahkan oleh titik koma(;).

Function ini akan mengembalikan keterangan jumlah plat genap dan jumlah plat ganjil.
*/

/*
ALGORITMA:
1.Memulai Program
2.Buatlah sebuah function dengan nama "ganjilGenap" yang menerima satu parameter "plat" bertipe string.
3.Periksa apakah parameter "plat" sama dengan undefined:
    *Jika iya, kembalikan "invalid data".
4.Periksa apakah parameter "plat" kosong:
    *Jika iya, kembalikan "plat tidak ditemukan".
5.Split "plat" berdasarkan tanda titik koma (";") dan simpan dalam variabel "platNumbers".
6.Buat dua variabel "evenCount" dan "oddCount" dengan nilai awal 0.
7.Loop melalui setiap elemen dalam "platNumbers":
    *Periksa apakah elemen yang diubah menjadi bilangan bulat genap:
        *Jika iya, tambahkan 1 ke "evenCount".
        *Jika tidak, tambahkan 1 ke "oddCount".
8.Periksa apakah "evenCount" dan "oddCount" sama-sama 0:
    *Jika iya, kembalikan "invalid data".
    *Jika tidak, lanjut ke langkah berikutnya.
9.Periksa apakah "evenCount" sama dengan 0:
    *Jika iya, kembalikan pesan dengan jumlah plat ganjil.
10.Periksa apakah "oddCount" sama dengan 0:
    *Jika iya, kembalikan pesan dengan jumlah plat genap.
    *Jika tidak, kembalikan pesan dengan jumlah plat genap dan ganjil.
11.Selesai.
*/

/*
PSEUDOCODE:
START
Function ganjilGenap(plat)
  If plat is equal to undefined Then
    Return "invalid data"
  End If
  
  If plat is empty Then
    Return "plat tidak ditemukan"
  End If
  
  Set platNumbers as the result of splitting plat by semicolon and filtering out empty elements
  Set evenCount to 0
  Set oddCount to 0
  
  For each num in platNumbers Do
    If the integer value of num modulo 2 is equal to 0 Then
      Increment evenCount by 1
    Else
      Increment oddCount by 1
    End If
  End For
  
  If evenCount is equal to 0 and oddCount is equal to 0 Then
    Return "invalid data"
  Else If evenCount is equal to 0 Then
    Return "plat genap tidak ditemukan dan plat ganjil sebanyak " + oddCount
  Else If oddCount is equal to 0 Then
    Return "plat genap sebanyak " + evenCount + " dan plat ganjil tidak ditemukan"
  Else
    Return "plat genap sebanyak " + evenCount + " dan plat ganjil sebanyak " + oddCount
  End If
End Function

Display ganjilGenap("2341;3429;864;1309;1276")
Display ganjilGenap("2347;3429;1305")
Display ganjilGenap("864;1308;1276;1432")
Display ganjilGenap("")
Display ganjilGenap()
END
*/

/*
IMPLEMENTASI:
*/

function ganjilGenap(plat) {
  if (plat === undefined) {
    return "invalid data";
  }

  if (!plat) {
    return "plat tidak ditemukan";
  }

  const platNumbers = plat.split(";").filter((num) => num !== "");
  let evenCount = 0;
  let oddCount = 0;

  for (const num of platNumbers) {
    if (parseInt(num) % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  if (evenCount === 0 && oddCount === 0) {
    return "invalid data";
  } else if (evenCount === 0) {
    return `plat genap tidak ditemukan dan plat ganjil sebanyak ${oddCount}`;
  } else if (oddCount === 0) {
    return `plat genap sebanyak ${evenCount} dan plat ganjil tidak ditemukan`;
  } else {
    return `plat genap sebanyak ${evenCount} dan plat ganjil sebanyak ${oddCount}`;
  }
}

console.log(ganjilGenap("2341;3429;864;1309;1276"));
console.log(ganjilGenap("2347;3429;1305"));
console.log(ganjilGenap("864;1308;1276;1432"));
console.log(ganjilGenap(""));
console.log(ganjilGenap());
