// ALGORITMA:
// 1.Memulai Program
// 2.Membuat variabel let beratBadan dan memasukan nilai berat badan
// 3.Membuat variabel let tinggiBadan dan memasukan nilai tinggi badan
// 4.Membuat variabel let BMI dan menghitung nilai BMI dari nilai berat badan / tinggi badan ** 2
// 5.Menampilkan pesan di console browser hasil dari perhitungan BMI

// PSEUDOCODE:
// START
// SAVE nilai 80 ke dalam variabel beratBadan
// SAVE nilai 160 ke dalam variabel tinggiBadan
// COUNT nilai BMI dengan rumus: beratBadan / (tinggiBadan ** 2)
// DISPLAY: `seorang pria dengan berat badan ${beratBadan} kg dan tinggi ${tinggiBadan} cm akan menghasilkan BMI ${BMI}`
// END

// IMPLEMENTASI:
let beratBadan = 80;
let tinggiBadan = 160;
let BMI = beratBadan / tinggiBadan ** 2;
console.log(`seorang pria dengan berat badan ${beratBadan} kg dan tinggi ${tinggiBadan} cm akan menghasilkan BMI ${BMI}`);
