---
title: Variabel dan konstanta di Javascript
date: 2020-03-20
description: Mencoba mengenal, memahami dan menggunakan variabel dan konstanta dalam javascript.
heroImage: https://images.unsplash.com/photo-1527931372109-865f33dff725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80
photographer: s2 art
unsplashAccount: s2artz
series: js101
seasonTitle: basic
season: 1
episode: 1
isPublished: true
---

Dalam pemrograman, sering kali program harus dapat menyimpan nilai sementara, baik nilai dari suatu operasi, ataupun nilai konstan yang akan digunakan kembali. Nilai sementara yang disimpan dapat diberi nama untuk mewakili nilainya, tujuannya adalah agar dapat mudah memanggil kembali nilai yang telah disimpan, Nilai sementara yang diberi nama dapat disebut juga dengan `Variabel`.

## Variabel

Variabel adalah 'wadah' untuk nilai yang dapat diganti dengan nilai baru. Variabel dapat digunakan untuk menyipan nilai nilai primitif (bilangan bulat, text / string) ataupun non-primitif seperti array dan function. Untuk membuat variabel dapat menggunakan keyword `var`. Untuk memahami lebih lanjut, mari kita (HAH~!? KITA?) gunakan contoh berikut:

```js
var name = 'Hendra Sadewa';

console.log(name); // Hendra Sadewa

name = 'hare';

console.log(name); // hare
```

Jika code diatas dijalankan akan menghasilkan output seperti ini:

```bash
Hendra Sadewa
hare
```

Dari contoh diatas terlihat nilai dari Variabel `name` dapat diubah dengan cara melakukan re-assign nilai `name = 'hare'`.

## Constants

Mirip seperti Variabel biasa, namun nilai dari constants tak dapat di re-assign. Bila dipaksa untuk di re-assign, maka akan menimbulkan error. Untuk menggunakan constants cukup definisikan Variabelnya dengan keyword `const`.

```js
const name = 'Hendra Sadewa';

console.log(name);

name = 'hare'; // error
```

Jika code diatas dijalankan, output seperti ini:

```bash
Hendra Sadewa
Uncaught TypeError: Assignment to constant Variable.
  at <anonymous>:3:6
```

Error yang terjadi adalah `TypeError` dan menyatakan adanya `Assignment to constant Variable.`, tepat seperti sifat constants yang tak dapat diganti nilainya dengan nilai yang baru.

## Beberapa Hal yang Perlu diperhatikan dalam Penggunaan Variable

Dalam penamaan variable, sebisa mungkin dapat mewakili nilai yang disimpan. Bila nilai dalam variable tak perlu untuk diubah, gunakanlah `const`.

```js
const userName = 'hendrasadewa';
const height = 161;

var heightCategory = null;

if (height > 180) {
  heightCategory = 'Tall';
} else if (height > 160) {
  heightCategory = 'average';
} else if (height < 160) {
  heightCategory = 'short';
}

console.log(
  username +
    ' termasuk dalam kategori ' +
    heightCategory +
    ' karena memiliki tinggi' +
    height +
    'cm'
);
```

Dari potongan program diatas jika di running akan menghasilkan output:

```bash
hendrasadewa termasuk dalam kategori average karena memiliki tinggi 161cm
```

Dapat diperhatikan bila penggunaan variable dengan nama yang sesuai dengan nilainya memudahkan programmer lain untuk memahami source code, karena dapat mengetahui secara langsung nilai apa yang disimpan. Penggunaan constant pun tepat karena nilai `username` dan nilai dari `height` tak akan di assign ulang seperti nilai `heightCategory` yang akan berubah sesuai dengan kondisi dari variabel `height`.

Mohon hindari lah contoh yang tidak baik seperti ini:

```js
const userName = 'hendrasadewa';
const h = 161;

var c = null;

if (height > 180) {
  c = 'Tall';
} else if (height > 160) {
  c = 'average';
} else if (height < 160) {
  c = 'short';
}

console.log(
  username +
    ' termasuk dalam kategori ' +
    c +
    ' karena memiliki tinggi' +
    h +
    'cm'
);
```

Dalam contoh yang kurang baik ini akan menimbulkan ~~perpecahan antar ummat~~ kebingungan karena nama dari variabel yang hanya menggunakan huruf tak dapat mewakili arti dari nilai yang disimpan.

Oiya, ada hal yang perlu diingat, bahwa nilai yang disimpan dalam variable tak dapat disimpan secara permanent (persist) karena hanya disimpan dalam runtime atau saat program dijalankan.

Okey, pembahasan untuk variabel dan konstanta sampai disini dulu, semoga dapat membantu dan dimengerti. Bila bingung atau menemukan kesalahan dalam artikel ini, silahkan mention gue di twitter [@sadevva\_](https://twitter.com/sadevva_).

Cheers 🥂
