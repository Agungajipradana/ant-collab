/*
Mengenal Penggunaan Function
*/

/*
Objectives
    Mampu memahami serta mengimplementasi penggunaan function pada JavaScript
RESTRICTION Tidak boleh menggunakan built-in function apapun

Directions
Lanjutkan kode berikut ini hingga dapat menampilkan nilai / output yang diminta!
*/

//-----------------------------------------------------------------------------------------------------------------

/*
Tugas 1
Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.
*/
/*
 BUATLAH KODE FUNCTION DISINI


console.log(shoutOut())  Menampilkan "Halo Function!" di console
*/

/*
ALGORITMA:
1.Memulai Program
2.Buat fungsi bernama "shoutOut".
3.Di dalam fungsi "shoutOut", kembalikan string "Halo Function!".
Panggil fungsi "shoutOut".
4.Tampilkan hasil panggilan fungsi di langkah 4 menggunakan console.log.
5.Selesai.
*/

/*
PSEUDOCODE:
START
Function shoutOut()
    Return "Halo Function!"
End Function

Display shoutOut()
END
*/

/*
IMPLEMENTASI:
*/

function shoutOut() {
  return "Halo Function!";
}

console.log(shoutOut());

// ----------------------------------------------------------------------------------------------------------------

/*
Tugas 2
Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.


 BUATLAH KODE FUNCTION DISINI


var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30
*/

/*
ALGORITMA:
1.Memulai Program
2.Buat fungsi bernama "calculateMultiply" dengan parameter "num1" dan "num2".
3.Di dalam fungsi calculateMultiply, kembalikan hasil perkalian antara "num1" dan "num2".
4.Deklarasikan variabel "num1" dengan nilai 5.
5.Deklarasikan variabel "num2" dengan nilai 6.
6.Deklarasikan variabel "hasilPerkalian" dan panggil fungsi calculateMultiply dengan mengirimkan nilai "num1" dan "num2" sebagai argumen.
7.Tampilkan nilai dari variabel "hasilPerkalian" menggunakan console.log.
8.Selesai.
*/

/*
PSEUDOCODE:
START
Function calculateMultiply(num1, num2)
    Return num1 * num2
End Function

Set num1 to 5
Set num2 to 6

Set hasilPerkalian to calculateMultiply(num1, num2)
Display hasilPerkalian
END
*/

/*
IMPLEMENTASI:
*/

function calculateMultiply(num1, num2) {
  return num1 * num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// ----------------------------------------------------------------------------------------------------------------

/*
Tugas 3

Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

 BUATLAH KODE FUNCTION DISINI

 
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
*/

/*
ALGORITMA:
1.Memulai Program
2.Tentukan variabel "name" dengan nilai "Agus"
3.Tentukan variabel "age" dengan nilai 30
4.Tentukan variabel "address" dengan nilai "Jln. Malioboro, Yogjakarta"
5.Tentukan variabel hobby dengan nilai "gaming"
6.Panggil fungsi processSentence dengan argumen name, age, address, dan hobby
7.Fungsi processSentence:
    *Terima empat parameter: name, age, address, hobby
    *Gabungkan parameter-parameter tersebut dalam sebuah kalimat dengan format yang sesuai
    *Kembalikan kalimat yang telah dibuat
8.Simpan hasil pemanggilan fungsi dalam variabel fullSentence
9.Tampilkan isi variabel fullSentence menggunakan console.log
10.Selesai.
*/

/*
PSEUDOCODE:
START
 SET name to "Agus"
  SET age to 30
  SET address to "Jln. Malioboro, Yogjakarta"
  SET hobby to "gaming"
  
  CALL processSentence with arguments name, age, address, and hobby
  FUNCTION processSentence with parameters name, age, address, and hobby
    RETURN "Nama saya " concatenated with name, ", umur saya " concatenated with age, " tahun, alamat saya di " concatenated with address, ", dan saya punya hobby yaitu " concatenated with hobby, "!"
  END FUNCTION
  
  SET fullSentence to the result of processSentence
  DISPLAY fullSentence using console.log
END
*/

/*
IMPLEMENTASI:
*/

function processSentence(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
