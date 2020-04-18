---
title: Fungsi di Javascript
date: 2020-04-18
description: Salah satu elemen penting di js, fungsi, mengapa penting? Baca aja yuk. biar traffic situs gue naik.
heroImage: https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
photographer: Shahadat Rahman
unsplashAccount: hishahadat
series: js101
seasonTitle: functions
season: 3
episode: 0
isPublished: true
---

Fungsi _f_ atau _f(x)_, (dengan symbol x sebagai argumen fungsi), merupakan kumpulan statement / code / ekspresi yang di bungkus dengan suatu nama, tujuannya adalah untuk mengerjakan suatu _task_ atau tugas dengan informasi yang diberikan.

Dengan adanya fungsi, memungkinkan untuk menjalankan kumpulan dari kode / statement dengan memanggil fungsinya tanpa menulis ulang kodenya dan hasilnya dapat disimpan kedalam suatu variabel, jika tidak menghasilkan atau `return` nilai, maka nilai yang akan dikembalikan adalah `undefined`. Setiap fungsi harus memiliki tanggung jawab yang berbeda dari fungsi lain. Supaya tak ada pengulangan / redudansi code yang ditulis.

#### Cara penulisan fungsi di javascript:

```js
function namaFungsi(argumen // opsional) {
    /* statement yang mau di bungkus */
    return nilaiYangMauDihHasilkan; // opsional
}

/* cara manggil */
let hasil = namaFungsi('nilai yang mau dimasuki kedalam fungsi');
```

### Definisi dan Menggunakan Fungsi

Untuk lebih jelasnya mari kita buat fungsi yang akan menghasilkan kalimat `hello, I'm a human`. Ada dua cara, yaitu:

#### Fungsi Tanpa Return Value:

```js
// definisi fungsi
function greeting() {
  // cetak teks
  console.log("hello, I'm a human");
}

greeting();
```

Fungsi tanpa `return` langsung mencetak teks nya, karena terdapat statement `console.log` di dalam fungsi.

#### Fungsi Dengan Return Value:

```js
// definisi fungsi
function greeting() {
  // mengembalikan nilai teks
  return "hello, I'm a human";
}

// panggil fungsi greeting cetak nilai
console.log(greeting());
```

Sementara dengan fungsi dengan `return` tidak langsung mencetak hasilnya, namun mengembalikan nilai teks `"hello, I'm a human"` ketika pemanggilan fungsi `greeting()` terjadi.

### Passing Nilai Ke dalam Fungsi

Argumen dalam fungsi dapat digunakan untuk _passing_ nilai ke dalam fungsi. Anggaplah argumen ini sebagai variabel yang dapat dikenali oleh fungsi.

Misal jika ingin mencetak teks `hello, my name is hendra, I'm a human`, namun, nilai dari nama `hendra` ingin kita ganti jadi sadewa tanpa merubah kode, kita dapat definisikan argumen dengan nama `name` kedalam definisi fungsi.

```js
// definisi fungsi
function greeting(name) {
  // mengembalikan nilai teks
  return `hello, my name is ${name}, I'm a human`;
}

// simpan hasil pemanggilan kedalam variabel
const greetingHendra = greeting('hendra');
const greetingSadewa = greeting('sadewa');

// cetak nilai
console.log(greetingHendra);
console.log(greetingSadewa);
```

jika di run, nilai `greetingHendra` akan berisi teks `hello, my name is hendra, I'm a human`, dan `greetingSadewa` akan berisi teks `hello, my name is sadewa, I'm a human`.

#### Q1: apa yang terjadi bila fungsi dipanggil tanpa memberikan nilai kedalam argumen ?

jika fungsi `greeting(name)` dari contoh diatas kita panggil tanpa argumen, akan menghasilkan nilai `hello, my name is undefined, I'm a human`. Karena nilai name akan bernilai `undefined` karena tak ada nilai yang di pass saat pemanggilan fungsi.

```js
console.log(greeting());
// hello, my name is undefined, I'm a human
```

#### Multiple Argument

Definisi fungsi dapat mendukung multiple argumen dengan cara memberikan comma (,) pada setiap argumen, untuk jelasnya mari kita buat program untuk cetak `hello, my name is han-tyumi, I'm a cyborg`. Dengan ketentuan nilai nama `han-tyumi` dan spesies `cyborg` dapat diubah sesuai dengan argumen-nya.

```js
// definisi fungsi
function greeting(name, species) {
  // mengembalikan nilai teks
  return `hello, my name is ${name}, I'm a ${species}`;
}

const cyborg = greeting('han-tyumi', 'cyborg');
const cat = greeting('appolo', 'cat');
const unknown = greeting();
const penguin = greeting('penguin?');
const tooMuch = greeting('too', 'much', 'argument');

console.log(cyborg);
console.log(cat);
console.log(unknown);
console.log(penguin);
console.log(tooMuch);
```

Output yang akan dihasilkan dari program di atas adalah:

```
hello, my name is han-tyumi, I'm a cyborg
hello, my name is appolo, I'm a cat
hello, my name is undefined, I'm a undefined
hello, my name is penguin?, I'm a undefined
hello, my name is too, I'm a much
```

Seperti array, argumen akan di lihat dari posisinya, jika hanya di provide satu nilai saja seperti pada `penguin`, argumen setelahnya akan `undefined`, sementara jika tak diberikan sama sekali seperti di `unknown` akan bernilai undefined, terakhir jika argumen melebihi dari di definisikan fungsi, maka akan diabaikan seperti pada `tooMuch`.

#### Q2: Bisa ga si dikasih default value gitu di argumennya bang?

bisa banget, caranya gini:

```js
function greeting(name = 'anon', species = 'unknown') {
  // mengembalikan nilai teks
  return `hello, my name is ${name}, I'm a ${species}`;
}

const unknown = greeting();
const penguin = greeting('penguin?');

console.log(unknown);
console.log(penguin);
```

Dengan definisi `name = 'anon'` dan `species = 'unknown'` nilai dari pemangillan `greeting()` akan menghasilkan teks `hello, my name is anon, I'm a unknown`, sedangkan `penguin` akan menghasilkan `hello, my name is penguin?, I'm a unknown`.

#### Object as a argument

Dalam js, ada cara yang cukup unik untuk definisikan argumen dalam fungsi, yaitu mendifinisikannya sebagai object. Mari kita coba ubah function `greeting` agar menggunakan object `{ name, species }` sebagai argumen.

```js
// definisi fungsi
function greeting({ name = 'anon', species = 'unknown' }) {
  // mengembalikan nilai teks
  return `hello, my name is ${name}, I'm a ${species}`;
}

const cyborg = greeting({ name: 'han-tyumi', species: 'cyborg' });
const author = greeting({ species: 'human', name: 'hendra' });
const penguin = greeting({ name: 'penguin?' });
const anon = greeting({});

console.log(cyborg);
console.log(author);
console.log(penguin);
console.log(anon);
```

Program diatas akan menghasilkan:

```
hello, my name is han-tyumi, I'm a cyborg
hello, my name is hendra, I'm a human
hello, my name is penguin?, I'm a unknown
hello, my name is anon, I'm a unknown
```

Pattern ini cukup enak untuk dibaca, karena pada saat memanggil fungsi kita tahu nilai apa yang akan dipassing ke dalam fungsi melalui 'key' dari object, karena menggunakan key, urutan dari argumen pun tidak berpengaruh. seperti contoh pada `author` key `species` dan `name` urutannya terbalik namun tetap menghasilkan nilai `hello, my name is hendra, I'm a human`.

Perlu diperhatikan pada saat mengisi nilai `anon` function `greeting` dipanggil dengan menyertakan object kosong `{}`, jika tidak program akan error karena tidak dapat destructure nilai dari variabel / argumen yang di passing kedalam fungsi. Walaupun berbentuk `{ name, species}` argumen fungsi `greeting` tetap hanya memiliki 1 buah argumen, hanya saja argumen tersebut di destructure menjadi `{name, species}`.

### Return values

Nilai yang dikembalikan oleh fungsi dapat berupa tipe data primitive ataupun non-primitves, untuk non-primitives kita dapat melakukan destructure agar lebih mudah dalam assignment variabel.

contoh:

Menghitung luas dan keliling persegi.

```js
function luasPersegi(panjang, lebar) {
  return panjang * lebar;
}

function kelilingPersegi(panjang, lebar) {
  return 2 * (panjang + lebar);
}

function hitungPersegi(panjang, lebar) {
  const luas = luasPersegi(panjang, lebar);
  const keliling = kelilingPersegi(panjang, lebar);
  return [luas, keliling];
}

const persegi = hitungPersegi(5, 4);

console.log('luas persegi adalah', persegi[0]);
console.log('keliling persegi adalah', persegi[1]);
```

Jika di perhatikan, variabel yang di cetak dalam `console.log` kurang dapat di mengerti dalam sekali baca karena hanya mengacu pada index dari persegi saja. Untuk memudahkan kita dapat mengubahnya menjadi

```js
function luasPersegi(panjang, lebar) {
  return panjang * lebar;
}

function kelilingPersegi(panjang, lebar) {
  return 2 * (panjang + lebar);
}

function hitungPersegi(panjang, lebar) {
  const luas = luasPersegi(panjang, lebar);
  const keliling = kelilingPersegi(panjang, lebar);
  return [luas, keliling];
}

const [luas, keliling] = hitungPersegi(5, 4);

console.log('luas persegi adalah', luas);
console.log('keliling persegi adalah', keliling);
```

Sifat destructure ini berlaku juga bila return value dari hitung persegi adalah object.

```js
function luasPersegi(panjang, lebar) {
  return panjang * lebar;
}

function kelilingPersegi(panjang, lebar) {
  return 2 * (panjang + lebar);
}

function hitungPersegi(panjang, lebar) {
  const luas = luasPersegi(panjang, lebar);
  const keliling = kelilingPersegi(panjang, lebar);
  return { luas, keliling };
}

const { luas, keliling } = hitungPersegi(5, 4);

console.log('luas persegi adalah', luas);
console.log('keliling persegi adalah', keliling);
```

ketiga potongan program tersebut akan menghasilkan output yang sama, yaitu:

```
luas persegi adalah 20
keliling persegi adalah 18
```

\*catatan: untuk perihal destructuring object, dapat dibaca dalam artikel [assignment operators](/js101/operators/1-assignment-operators/).

Okay sepertinya sudah cukup untuk intro kedalam fungsi dalam javascript, masih banyak lagi hal yang akan di bahas namun akan panjang sekali bila jadi satu artikel. ~~alesan padahal mah udah pusing mau bahas apa lagi~~ , jadi gue tutup dulu sampai sini ya, see ya later.

Cheers 🥂
