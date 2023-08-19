/*
Logic Challenge - Tabel Perkalian
*/

/*
RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in untuk mengkonversi tipe data
*/

/*
Directions
Diberikan sebuah function tabelPerkalianyang menerima satu parameter angka.

Function akan mengembalikan array berisi string berupa faktor perkalian dari angka yang diberikan.
*/

/*
ALGORITMA:
1.Memulai Program
2.Buat variabel result untuk menyimpan hasil perkalian dalam bentuk string
3.Looping i dari 1 hingga angka:
    *Jika angka modulus i sama dengan 0:
        *Hitung faktor dengan membagi angka dengan i
        *Tambahkan ${i}x${factor} ke dalam array result
4.Selesai
5.Kembalikan nilai dari result
6.Selesai.
*/

/*
PSEUDOCODE:
START
Function tabelPerkalian(angka):
    Initialize an empty array called result
    
    For i from 1 to angka:
        If angka modulo i equals 0:
            Set factor as angka divided by i
            Add `${i}x${factor}` to the result array
    
    Return the result array
End Function
END
*/

/*
IMPLEMENTASI:
*/

function tabelPerkalian(angka) {
  const result = [];

  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      const factor = angka / i;
      result.push(`${i}x${factor}`);
    }
  }
  return result;
}

console.log(tabelPerkalian(24));
console.log(tabelPerkalian(90));
console.log(tabelPerkalian(20));
console.log(tabelPerkalian(179));
console.log(tabelPerkalian(1));
