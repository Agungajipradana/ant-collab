/*
Logic Challenge: Melee Ranged Grouping
*/

/*
Objectives

    *Mengerti keterhubungan satu function dengan function lainnya
    *Mengerti melempar/memasukkan data hasil satu function kemudian digunakan untuk parameter function lain
    *Mampu membuat function serupa built in function split

RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop()
*/

/*
Directions
Diberikan 2 function:

    *meleeRangedGrouping yang menerima 1 parameter berupa string. Implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

    Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

    Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

    Jika input adalah string kosong ('') maka return array kosong

    *Untuk memisahkan nama hero dan tipenya, implementasikan function splitting yang telah diberikan dimana hasil dari function tersebut adalah array satu dimensi

    Output yang diharapkan: ['Razor', 'Ranged']
*/

/*
ALGORITMA:
1.Memulai Program
2.Buatlah sebuah fungsi bernama splitting yang menerima satu parameter berupa string.
3.Di dalam fungsi splitting, gunakan fungsi split(",") untuk memisahkan string menjadi array berdasarkan koma (,).
4.Kembalikan array yang dihasilkan.
5.Buatlah sebuah fungsi bernama meleeRangedGrouping yang menerima satu parameter berupa string.
6.Di dalam fungsi meleeRangedGrouping, cek apakah string parameter str kosong. Jika iya, kembalikan array kosong.
7.Jika tidak, panggil fungsi splitting dengan parameter str untuk mendapatkan daftar hero dan tipenya dalam bentuk array.
8.Buatlah dua array kosong bernama rangedHeroes dan meleeHeroes.
9.Loop melalui setiap elemen di dalam array heroList hasil dari pemisahan tadi.
    *Gunakan fungsi splitting lagi untuk memisahkan nama hero dan tipenya berdasarkan tanda minus (-).
    *Jika tipe hero adalah "Ranged", tambahkan nama hero ke dalam array rangedHeroes.
    *Jika tipe hero adalah "Melee", tambahkan nama hero ke dalam array meleeHeroes.
10.Kembalikan array yang berisi dua array, yaitu rangedHeroes dan meleeHeroes.
11.Panggil fungsi meleeRangedGrouping dengan parameter yang sesuai dan tampilkan hasilnya.
12.Selesai.
*/

/*
PSEUDOCODE:
START
Function splitting(str)
    Return str.split(",")
END FUNCTION

Function meleeRangedGrouping(str)
    If str is empty
        Return an empty array
    
    Set heroList as splitting(str)
    Set rangedHeroes as an empty array
    Set meleeHeroes as an empty array
    
    For each hero in heroList
        Set [name, type] as splitting(hero)
        If type is "Ranged"
            Push name into rangedHeroes
        Else if type is "Melee"
            Push name into meleeHeroes
            
    Return an array containing rangedHeroes and meleeHeroes
END FUNCTION

Display meleeRangedGrouping("Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged")
Display meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
Display meleeRangedGrouping("")
END
*/

/*
IMPLEMENTASI:
*/

function splitting(str) {
  return str.split(",");
}

function meleeRangedGrouping(str) {
  if (str === "") {
    return [];
  }

  const heroList = splitting(str);
  const rangedHeroes = [];
  const meleeHeroes = [];

  for (let hero of heroList) {
    const [name, type] = splitting(hero);
    if (type === "Ranged") {
      rangedHeroes.push(name);
    } else if (type === "Melee") {
      meleeHeroes.push(name);
    }
  }
  return [rangedHeroes, meleeHeroes];
}

console.log(meleeRangedGrouping("Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged"));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
