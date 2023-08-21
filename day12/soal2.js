/*
Logic Challenge - Most Frequent Largest Numbers
*/

/*
Objectives

    *Mengerti keterhubungan satu function dengan function lainnya
    *Mengerti melempar/memasukkan data hasil satu function kemudian digunakan untuk parameter function lain

RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()
*/

/*
Directions
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/

/*
ALGORITMA:
1.Memulai Program
2.Lakukan perulangan luar dari 0 hingga panjang arrNumber.
    *Lakukan perulangan dalam dari 0 hingga panjang arrNumber dikurangi dengan i dikurangi 1.
        *Periksa apakah arrNumber[j] lebih kecil dari arrNumber[j + 1].
        *Jika iya, tukar nilai arrNumber[j] dan arrNumber[j + 1].
3.Kembalikan arrNumber yang sudah terurut.
4.Buatlah fungsi getTotal yang menerima parameter arrNumber (array angka).
5.Jika panjang arrNumber sama dengan 0, kembalikan spasi.
6.Deklarasikan variabel highestNumber dan inisialisasikan dengan nilai pertama dari arrNumber.
7.Deklarasikan variabel count dan inisialisasikan dengan 0.
8.Lakukan perulangan dari 0 hingga panjang arrNumber.
    *Periksa apakah arrNumber[i] sama dengan highestNumber.
    *Jika iya, tambahkan 1 ke count.
    *Jika tidak, keluar dari perulangan.
9.Kembalikan string yang menggambarkan nilai tertinggi dan jumlah kemunculannya.
10.Buatlah fungsi mostFrequentLargestNumbers yang menerima parameter arrNumber (array angka).
11.Simpan hasil dari pemanggilan fungsi sorting pada variabel listSort.
12.Simpan hasil dari pemanggilan fungsi getTotal pada variabel countHighest.
13.Kembalikan countHighest.
14.Pemanggilan fungsi mostFrequentLargestNumbers dengan array angka tertentu.
15.Selesai.
*/

/*
PSEUDOCODE:
START
FUNCTION sorting(arrNumber)
    FOR i = 0 TO length of arrNumber
        FOR j = 0 TO length of arrNumber - i - 1
            IF arrNumber[j] < arrNumber[j + 1]
                SWAP arrNumber[j] AND arrNumber[j + 1]
            END IF
        END FOR
    END FOR
    RETURN arrNumber
END FUNCTION

FUNCTION getTotal(arrNumber)
    IF length of arrNumber = 0
        RETURN " "
    END IF

    SET highestNumber = arrNumber[0]
    SET count = 0

    FOR i = 0 TO length of arrNumber
        IF arrNumber[i] = highestNumber
            INCREMENT count BY 1
        ELSE
            EXIT FOR LOOP
        END IF
    END FOR

    RETURN "angka paling besar adalah " + highestNumber + " dan jumlah kemunculan sebanyak " + count + " kali"
END FUNCTION

FUNCTION mostFrequentLargestNumbers(arrNumber)
    SET listSort = CALL sorting(arrNumber)
    SET countHighest = CALL getTotal(listSort)
    RETURN countHighest
END FUNCTION
END
*/

/*
IMPLEMENTASI:
*/

function sorting(arrNumber) {
  for (let i = 0; i < arrNumber.length; i++) {
    for (let j = 0; j < arrNumber.length - i - 1; j++) {
      if (arrNumber[j] < arrNumber[j + 1]) {
        let temp = arrNumber[j];
        arrNumber[j] = arrNumber[j + 1];
        arrNumber[j + 1] = temp;
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  if (arrNumber.length === 0) {
    return " ";
  }

  let highestNumber = arrNumber[0];
  let count = 0;

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === highestNumber) {
      count++;
    } else {
      break;
    }
  }
  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${count} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));

console.log(mostFrequentLargestNumbers([]));
