---
title: Operator logika di Javascript
date: 2020-04-11
description: Biasanya sih buat combine dua buah operasi yang menghasilkan nilai boolean.
heroImage: https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80
photographer: israel palacio
unsplashAccount: othentikisra
series: js101
seasonTitle: operators
season: 2
episode: 4
isPublished: true
---

Logical operator biasanya sih buat combine dua buah operasi yang menghasilkan nilai boolean, dan akan menghasilkan nilai boolean juga. Cara kerja dari operator ini seperti gerbang logika, sesuai dengan gerbang logika, operator ini terdiri dari:

| Symbol | Deskripsi     |
| ------ | ------------- |
| &&     | AND           |
| \|\|   | OR            |
| !      | NOT (inverse) |

Contoh:

```js
10 > 5 && 5 > 2; // true
10 > 5 && 4 < 2; // false
8 === 2 && 4 < 2; // false
```

Operator AND hanya akan menghasilkan `true` bila kedua nilai yang dibandingkan adalah bernilai `true`.

```js
10 > 5 || 5 > 2; // true
10 > 5 || 4 < 2; // true
8 === 2 || 4 < 2; // false
```

Operator OR akan menghasilkan `true` bila salah satu atau kedua nilai yang dibandingkan adalah bernilai `true`.

```js
!(10 > 5 || 5 > 2); // false
!(10 > 5 || 4 < 2); // false
!(8 === 2 || 4 < 2); // true

!(10 > 5 || 5 > 2); // false
!(10 > 5 || 4 < 2); // true
!(8 === 2 || 4 < 2); // true
```

Operator NOT akan menghasilkan kebalikan (inverse) dari nilai boolean yang dihasilkan.

### Short-Circuit

Selain digunakan untuk melakukan perbandingan antar dua ekspresi boolean, operator AND `&&` dan OR `||`, dapat digunakan juga untuk melakukan evaluasi sebelum menjalankan statement selanjutnya, maksudnya gimana sih?

Contoh, kita akan menjalankan (HAH~!?, KITA?!) statement 'selamat anda cukup umur untuk masuk' jika nilai variabel `age` adalah diatas 18 tahun.

```js
const MIN_AGE = 18;

let age = 21;
console.log(age >= MIN_AGE && 'selamat anda cukup umur untuk masuk');
```

Dari code diatas, output yang akan dihasilkan adalah 'selamat anda cukup umur untuk masuk', karena nilai `age` adalah 21, jika nilai `age` diganti dengan 16 maka tidak akan mencetak message.

intinya jika statement evaluasi bernilai `true`, maka akan lanjut ke statement selanjutnya.

sementara, bila kode tadi diganti menjadi seperti ini:

```js
const MIN_AGE = 18;

let age = 21;
console.log(age >= MIN_AGE || 'selamat anda cukup umur untuk masuk');
```

Console Akan mencetak `true`, karena nilai yang dihasilkan oleh `age >= MIN_AGE` adalah `true`. Karena OR akan langsung mengabaikan statement selanjutnya, dan akan mengambil nilai dari statement evaluasi.

Cheers 🥂
