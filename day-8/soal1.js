/*
Day 8 - Test Day
*/

/*
SOAL 1
Anda diberikan sebuah array bilangan bulat nums. Awalnya, Anda berada di indeks pertama array, dan setiap elemen dalam array mewakili panjang loncatan maksimum Anda pada posisi tersebut.

Kembalikan nilai true jika Anda dapat mencapai indeks terakhir array, atau false jika tidak.

Contoh 1:

Input: nums = [2,3,1,1,4]
Output: true
Penjelasan: Loncat 1 langkah dari indeks 0 ke 1, lalu loncat 3 langkah ke indeks terakhir.

Contoh 2:

Input: nums = [3,2,1,0,4]
Output: false
Penjelasan: Anda akan selalu sampai di indeks 3, apa pun yang terjadi. Panjang loncatan maksimumnya adalah 0, yang membuatnya tidak mungkin mencapai indeks terakhir.
*/

/*
ALGORITMA:
1.Memulai Program
2.nisialisasi variabel "maxReach" dengan nilai 0.
3.Dapatkan panjang array "nums" dan simpan dalam variabel "length".
4.Loop melalui setiap elemen dalam array "nums" dengan indeks "i" dari 0 hingga "length" - 1.
5.Dalam setiap iterasi:
    *Periksa jika nilai "i" lebih besar dari "maxReach". Jika ya, kembalikan "false" karena tidak mungkin mencapai indeks tersebut.
    *Perbarui nilai "maxReach" dengan nilai maksimum antara "maxReach" dan "i + nums[i]"".
    *Periksa jika "maxReach" sudah mencapai atau melebihi indeks terakhir array. Jika ya, kembalikan "true" karena sudah mencapai akhir array.
6.Setelah selesai loop, kembalikan "false" karena belum mencapai akhir array.
7.Selesai.
*/

/*
PSEUDOCODE:
START
function canJump(nums):
    maxReach = 0
    length = length of nums
    
    for i = 0 to length - 1:
        if i > maxReach:
            return false
        maxReach = maximum of maxReach and (i + nums[i])
        if maxReach >= length - 1:
            return true
    
    return false

nums1 = [2, 3, 1, 1, 4]
result1 = canJump(nums1)
print result1  // Output: true

nums2 = [3, 2, 1, 0, 4]
result2 = canJump(nums2)
print result2  // Output: false
END
*/

/*
IMPLEMENTASI:
*/

function canJump(nums) {
  let maxReach = 0;
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= length - 1) {
      return true;
    }
  }

  return false;
}

// Contoh 1
const nums1 = [2, 3, 1, 1, 4];
console.log(canJump(nums1)); // Output: true

// Contoh 2
const nums2 = [3, 2, 1, 0, 4];
console.log(canJump(nums2)); // Output: false
