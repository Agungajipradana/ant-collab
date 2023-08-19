/*
Logic Challenge - Password Generator
*/

/*
Objectives
    Mengerti keterhubungan satu function dengan function lainnya
    Mengerti melempar/memasukkan data hasil satu function kemudian digunakan untuk parameter function lain

RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()
*/

/*
Directions

Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    1.Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

    2.Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    3.Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    4.Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

/*
ALGORITMA:
1.Memulai Program
2.Buat sebuah fungsi bernama changeVocals yang menerima parameter str.
3.Inisialisasi variabel result dengan nilai string kosong.
4.Lakukan perulangan dari i = 0 hingga i < panjang str:
    *Ambil karakter dari str pada indeks i dan simpan dalam variabel char.
    *Gunakan switch untuk memeriksa nilai char:
        *Jika char adalah "a", ganti dengan "b".
        *Jika char adalah "i", ganti dengan "j".
        *Jika char adalah "u", ganti dengan "v".
        *Jika char adalah "e", ganti dengan "f".
        *Jika char adalah "A", ganti dengan "B".
        *Jika char adalah "I", ganti dengan "J".
        *Jika char adalah "U", ganti dengan "V".
        *Jika char adalah "E", ganti dengan "F".
        *Jika tidak ada kondisi di atas yang terpenuhi, biarkan nilai char tetap sama.
    *Tambahkan nilai char ke dalam variabel result.
6.Kembalikan nilai result.
7.Buat sebuah fungsi bernama reverseWord yang menerima parameter str.
8.Inisialisasi variabel reversed dengan nilai string kosong.
9.Lakukan perulangan dari i = panjang str - 1 hingga i >= 0:
    *Ambil karakter dari str pada indeks i dan tambahkan ke variabel reversed.
10.Kembalikan nilai reversed.
11.Buat sebuah fungsi bernama setLowerUpperCase yang menerima parameter str.
12.Inisialisasi variabel result dengan nilai string kosong.
13.Lakukan perulangan dari i = 0 hingga i < panjang str:
    *Ambil karakter dari str pada indeks i dan simpan dalam variabel char.
    *Jika char adalah huruf kecil, ubah menjadi huruf besar dan tambahkan ke dalam result.
    *Jika char adalah huruf besar, ubah menjadi huruf kecil dan tambahkan ke dalam result.
14.Kembalikan nilai result.
15.Buat sebuah fungsi bernama removeSpaces yang menerima parameter str.
16.Kembalikan nilai str yang sudah diubah dengan menghapus spasi.
17.Buat sebuah fungsi bernama passwordGenerator yang menerima parameter name.
18.Jika panjang name kurang dari 5, kembalikan pesan "Minimal karakter yang diinputkan adalah 5 karakter".
19.Panggil fungsi changeVocals dengan parameter name dan simpan hasilnya dalam variabel changedVowels.
20.Panggil fungsi reverseWord dengan parameter changedVowels dan simpan hasilnya dalam variabel reversed.
21.Panggil fungsi setLowerUpperCase dengan parameter reversed dan simpan hasilnya dalam variabel changedCase.
22.Panggil fungsi removeSpaces dengan parameter changedCase dan simpan hasilnya dalam variabel password.
23.Kembalikan nilai password.
24.Panggil fungsi passwordGenerator dengan berbagai nilai input dan cetak hasilnya.
15..Selesai.
*/

/*
PSEUDOCODE:
START
function changeVocals(str)
    result <- ""
    for i <- 0 to length of str - 1
        char <- get character from str at index i

        switch char
            case "a":
                char <- "b"
            case "i":
                char <- "j"
            case "u":
                char <- "v"
            case "e":
                char <- "f"
            case "A":
                char <- "B"
            case "I":
                char <- "J"
            case "U":
                char <- "V"
            case "E":
                char <- "F"

        result <- result + char

    return result
END function

function reverseWord(str)
    reversed <- ""
    for i <- length of str - 1 to 0
        reversed <- reversed + get character from str at index i

    return reversed
END function

function setLowerUpperCase(str)
    result <- ""
    for i <- 0 to length of str - 1
        char <- get character from str at index i

        if char is lowercase
            char <- convert char to uppercase
        else if char is uppercase
            char <- convert char to lowercase

        result <- result + char

    return result
END function

function removeSpaces(str)
    return str after removing spaces
END function

function passwordGenerator(name)
    if length of name < 5
        return "Minimal karakter yang diinputkan adalah 5 karakter"

    changedVowels <- call changeVocals function with name as parameter
    reversed <- call reverseWord function with changedVowels as parameter
    changedCase <- call setLowerUpperCase function with reversed as parameter
    password <- call removeSpaces function with changedCase as parameter

    return password
END function

Display passwordGenerator with various input values

END
*/

/*
IMPLEMENTASI:
*/

function changeVocals(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    switch (char) {
      case "a":
        char = "b";
        break;
      case "i":
        char = "j";
        break;
      case "u":
        char = "v";
        break;
      case "e":
        char = "f";
        break;
      case "A":
        char = "B";
        break;
      case "I":
        char = "J";
        break;
      case "U":
        char = "V";
        break;
      case "E":
        char = "F";
        break;
    }

    result += char;
  }

  return result;
}

function reverseWord(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function setLowerUpperCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
}

function removeSpaces(str) {
  return str.split(" ").join("");
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  const changedVowels = changeVocals(name);
  const reversed = reverseWord(changedVowels);
  const changedCase = setLowerUpperCase(reversed);
  const password = removeSpaces(changedCase);

  return password;
}

console.log(passwordGenerator("Sergei Dragunov"));
console.log(passwordGenerator("Dimitri Wahyudiputra"));
console.log(passwordGenerator("Alexei"));
console.log(passwordGenerator("Alex"));
