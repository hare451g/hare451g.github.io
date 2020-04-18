---
title: Operator Aritmatika di Javascript
date: 2020-03-26
description: Tutorial menggunakan operator aritmatika dalam javascript untuk mengolah data numeric.
heroImage: https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
photographer: Antoine Dautry
unsplashAccount: antoine1003
series: js101
seasonTitle: operators
season: 1
episode: 2
isPublished: true
---

## Operator Aritmatika

[Diartikel sebelumnya](/js101/operators/1-assignment-operators/) sudah ada beberapa operator aritmatika yang digunakan, mari bahas lebih dalam.

Mari check tabel yang berisi operator aritmatika yang ada dalam javascript berikut:

| Operator | Description          |
| :------- | :------------------- |
| +        | Tambah               |
| -        | Kurang               |
| \*       | Kali                 |
| \*\*     | Pangkat (ES6)        |
| /        | Bagi                 |
| %        | Modulus (Sisa Bagi)  |
| ++       | Increment ( plus 1)  |
| --       | Decrement ( minus 1) |

Berikut contoh code yang disertai operasi aritmatik, mari copas potongan code dibawah terus save dengan nama file `arit.js`.

```js
// arit.js
let hasil = 0;

hasil = 4 + 2;
console.log('4 + 2 =', hasil);

hasil = 4 - 2;
console.log('4 - 2 =', hasil);

hasil = 4 * 2;
console.log('4 * 2 =', hasil);

hasil = 4 ** 2;
console.log('4 ** 2 =', hasil);

hasil = 4 / 2;
console.log('4 / 2 =', hasil);

hasil = 4 % 2;
console.log('4 % 2 =', hasil);
```

Jika dirunning dengan perintah `node arit.js`, maka akan menghasilkan output:

```bash
4 + 2 = 6
4 - 2 = 2
4 * 2 = 8
4 ** 2 = 16
4 / 2 = 2
4 % 2 = 0
```

oke, normal ya, sesuai dengan ekspektasi, sekarang kita coba dua operator terakhir, yaitu increment `++` dan decrement `--`. Coba replace isi dari file `Operatorsarit.js` dengan code dibawah ini:

```js
let hasil = 0;

hasil = 4++;
console.log('4++ =', hasil);

hasil = 4--;
console.log('4-- =', hasil);
```

Jika dirunning dengan perintah `node arit.js`, maka akan menghasilkan output:

```js
hasil = 4++;
        ^
SyntaxError: Invalid left-hand side expression in postfix operation
```

Error yha~, karena nilai `4` adalah nilai _primitive_, dan primitive bersifat _imuttable_, jadi operator increment atau decrement tak bisa secara langsung digunakan, karena kedua operator ini bersifat mengubah nilai dari `4`. Sehingga kita harus assign terlebih dahulu nilai `4` kedalam variabel.

```js
let hasil = 0;

hasil = 4;
hasil++;
console.log('4++ =', hasil);

hasil = 4;
hasil--;
console.log('4-- =', hasil);
```

Output:

```js
4++ = 5;
4-- = 3;
```

nah, sekarang sudah berjalan sesuai dengan ekspektasi, karena operator increment dan decrement memiliki variabel. Hayo yang belum paham mengenai tipe data dan primitive di javascript bisa baca [artikel ini terlebih dahulu](/js101/introduction/2-data-types/)).

Jadi sekarang sudah bisa ya bikin kalkulator pakai javascript, hehehe.

Cheers 🥂
