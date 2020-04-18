---
title: Tipe data dan primitives di Javascript
date: 2020-03-21
description: Mencoba memahami tipe data yang ada di dalam javascript beserta cara menggunakan variabel.
heroImage: https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80
photographer: Jeff Sheldon
unsplashAccount: ugmonk
series: js101
seasonTitle: basic
season: 1
episode: 2
isPublished: true
---

Javascript bersifat _Dynamic Type_ yang artinya tipe data yang di assign kedalam suatu variabel dapat berubah, beda dengan java atau c yang besifat _Static Type_ yang tipe datanya tak bisa dirubah dan harus menentukan tipe data ketika kita (HAH~?! Kita?) mendeklarasikan suatu variabel. Terkadang hal ini akan membingungkan bagi orang yang awal nya sudah pernah belajar bahasa Java / C / Pascal.

_Jika kalian nyaman dengan static typing, javascript juga memiliki subset bahasa yang bersifat static typing, yaitu [TypeScript](https://www.typescriptlang.org/)._

## Mengapa JavaScript besifat Dynamic Typing?

Karena variabel dalam javascript hanya merujuk pada suatu nilai primitif.

Misal dalam Java ketika variabel yang telah dideklarasikan dengan tipe data integer, di assign dengan nilai dengan tipe data string, maka nilai tersebut akan ditolak dan java akan menyatakan error.

Contoh:

Misal nilai variabel `a` adalah bilangan bulat (integer) 100;

Dengan menggunakan Java

```java
int a = 100;
```

Dengan menggunakan JavaScript

```js
var a = 100;
```

Terlihat dalam java variabel a telah ditentukan untuk memiliki nilai integer dengan adanya keyword `int` sebelum nama dari variabelnya, berbeda dengan javascript yang hanya menggunakan keyword `var` yang menandakan scope atau jangkauan dari variabel saja.

Variabel dalam javascript dapat dianggap sebagai relasi. Dari contoh sebelumnya variabel `a` merujuk ke nilai `100`, dan nilai `100` tersebut dapat disebut dengan nilai primitif dalam JavaScript. Sehingga tak ada keterikatan antara tipe data dan nilai yang akan di assign.

## Primitif

Sebelumnya dijelaskan bahwa variabel dalam javascript merujuk ke nilai (value) atau primitif, nah yang disebut primitif ini adalah nilai yang tak memiliki atribut, method, dan bersifat `read-only`, jadi nilainya tidak dapat diubah (_immutable_), hanya bisa di assign dengan nilai primitif lain.

Berikut beberapa primitif yang ada di JavaScript:

- `boolean` : berisi nilai antara `true` atau `false`
- `number` : bilangan dari -(2<sup>53</sup> − 1) sampai 2<sup>53</sup> − 1
- `bigint` : bilangan lebih dari [nilai bilangan maksimal yang telah ditentukan oleh javacript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).
- `string` : berisikan satu atau kumpulan dari karakter.
- `null` : menandakan data atau variabel bernilai kosong atau `null`.
- `undefined`: variabel belum memiliki definisi.

### Primitif besifat Immutable

Untuk membuktikan bahwa primitif bersifat _immutable_ atau tak dapat diubah, kita gunakan contoh program ini:

```js
var name = 'Hendra Sadewa';
console.log(name);

name[0] = 'R';
console.log(name);

name = 'Firman Hendrad';
console.log(name);
```

Code diatas akan menghasilkan output seperti ini:

```bash
Hendra Sadewa
Hendra Sadewa
Firman Hendrad
['Hendra', 'Annisa', 'Firman']
["Sadewa", "Annisa", "Firman"]
```

Terlihat bila nilai primitive tak dapat diubah dengan perintah `name[0] = 'R';` yang tujuannya adalah untuk mengubah karakter pertama dari string `Hendra Sadewa` yang disimpan dalam variabel `name`. Namun Primitive dapat direplace nilainya dengan nilai baru, hal ini dapat dibuktikan dengan perintah `name = 'Firman Hendrad';` yang menghasilkan teks `Firman Hendrad` ketika variabel `name` dicetak dengan `console.log`.

### Primitif dapat dibandingkan nilainya

Karena menyimpan suatu nilai, primitif dapat di bandingkan nilainya yang akan menghasilkan nilai boolean.

```js
const employee1Age = 24;
const employee2Age = 24;

const isSame = employee1Age === employee2Age;
console.log(isSame);
```

potongan program diatas kan menghasilkan output:

```bash
true
```

Menyatakan bila nilai dari variable `isSame` yang bernilai perbandingan antara `employee1Age` dan `employee2Age` adalah sama atau bernilai `true`.

## Non-Primitif

Nilai yang disimpan oleh variabel yang non-primitif adalah referensi dari suatu object. Nilai non-primitif dapat diubah nilainya, dan nilai nya tak dapat dibandingkan (compare).

Berikut tipe data non-primitif yang umum digunakan di javascript:

- `Array`: kumpulan atau list dari beberapa nilai yang dapat diakses oleh indeksnya.
- `Object`: nilai yang berisi pasangan dari key dan value dapat diakses oleh key nya.

### Non-Primitif dapat diubah nilainya

Untuk membahas mutability dalam non-primitif mari kita check potongan kode dibawah ini:

```js
var names = ['Hendra', 'Annisa', 'Firman'];
console.log(names);

names[0] = 'Sadewa';
console.log(names);

const employee = {
  name: 'Yudi',
  position: 'Front End Engineer',
};

employee.position = 'Fullstack Engineer';
```

Pada tipe non-primitive seperti Array, nilai nya dapat diubah seperti perintah `names[0] = 'Sadewa';` yang akan mengganti nilai pertama atau index pertama dari array `names` dengan teks `Sadewa`, dan nilai atribut `position` didalam object `employee` dapat diganti juga melalui perintah `employee.position = 'Fullstack Engineer';`.

### Non-Primitif tak bisa dibandingkan nilainya

Karena non-primitif menyimpan referensi dari objek, nilainya tak dapat dibandingkan. Mari check code dibawah ini:

```js
const employee1 = {
  name: 'Yudi',
  position: 'Front End Engineer',
};

const employee2 = {
  name: 'Yudi',
  position: 'Front End Engineer',
};

const isEmployeeSame = employee1 === employee2;
console.log(isEmployeeSame);

const isNamePositionSame = employee1.position === employee2.position;
console.log(isNamePositionSame);

const alicePets = ['turtle', 'cat'];
const alisonPets = ['turtle', 'cat'];

const isTheirPetsSame = alicePets === alisonPets;
console.log(isTheirPetsSame);

const amandaPets = alisonPets;
const isAmandaPetsSame = amandaPets === alisonPets;
console.log(isAmandaPetsSame);
```

output:

```bash
false
true
false
true
```

Terbukti bahwa:

1. Nilai dari variabel non primitif yaitu employee1 dan employee2 tak dapat dibandingkan walaupun objeknya sama persis, nilai yang dihasilkan dari komparasi `const isEmployeeSame = employee1 === employee2;` adalah `false`.
2. Sedangkan nilai attribut object employee yang bernilai primitif dapat dibandingkan yaitu attribut position yang ada di kedua object dengan menggunakan perintah `const isNamePositionSame = employee1.position === employee2.position;` yang akan menghasilkan `true` karena nilainya sama.
3. Begitu pula dengan Array, hasil dari perbandingan `alicePets === alisonPets;` akan menghasilkan `false, walaupun isi dari keuda variabel itu sama persis.
4. Variabel non primitif dapat di compare melalui refensi nya, dibuktikan dari nilai `amandaPets` yang di assign dengan variabel `alisonPets`, ketika dibandingkan kedua variabel tersebut `amandaPets === alisonPets;` hasilnya adalah `true`.

Sampai disini dulu pembahasan mengenai data types yang ada dalam javascript, untuk detailnya akan dibahas dilain artikel, semoga bermanfaat.

Cheers 🥂
