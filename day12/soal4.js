/*
Logic Challenge: Damage Calculation

RESTRICTION Tidak boleh menggunakan built-in function apapun
*/

/*
Directions

Diberikan function attack(), damageCalculation().

    *Function damageCalculation() akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
    *Function attack() akan menerima 1 parameter yaitu damage

Gunakan function damageCalculation() untuk menghitung damage yang diterima dan gunakan function attack() untuk mensimulasikan setiap attack dengan rumus damage - 2 disetiap attack.

Contoh:

damageCalculation(3, 10) akan mengembalikan nilai 24

Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8
*/

/*
ALGORITMA:
1.Memulai Program
2.Buat fungsi attack yang menerima satu parameter damage
3.Kembalikan nilai damage - 2 dari fungsi attack
4.Akhiri fungsi attack
5.Buat fungsi damageCalculation yang menerima dua parameter numberOfAttacks dan damagePerAttack
6.Inisialisasi variabel totalDamage dengan nilai 0
7.Loop sebanyak numberOfAttacks kali dengan indeks i
    *Tambahkan hasil pemanggilan fungsi attack(damagePerAttack) ke variabel totalDamage
8.Kembalikan nilai totalDamage dari fungsi damageCalculation
9.Akhiri fungsi damageCalculation
10.Cetak hasil pemanggilan damageCalculation(9, 25)
11.Cetak hasil pemanggilan damageCalculation(10, 4)
12.Selesai.
*/

/*
PSEUDOCODE:
START
Function attack(damage)
    Return damage - 2
End Function

Function damageCalculation(numberOfAttacks, damagePerAttack)
    Set totalDamage to 0
    For i = 1 to numberOfAttacks
        Add attack(damagePerAttack) to totalDamage
    End For
    Return totalDamage
End Function

Display damageCalculation(9, 25)
Display damageCalculation(10, 4)
END
*/

/*
IMPLEMENTASI:
*/

function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  let totalDemage = 0;

  for (let i = 0; i < numberOfAttacks; i++) {
    totalDemage += attack(damagePerAttack);
  }
  return totalDemage;
}

console.log(damageCalculation(9, 25));

console.log(damageCalculation(10, 4));

console.log(damageCalculation(5, 20));
