---
title: Operator assignment di Javascript
date: 2020-03-25
description: Operator untuk mengisi nilai variabel, beserta teknik seperti destructuring variabel dari suatu object atau array.
heroImage: https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80
photographer: Andrew Neel
unsplashAccount: andrewtneel
series: js101
seasonTitle: operators
season: 2
episode: 1
isPublished: true
---

## Operator assignment

Operator ini digunakan untuk memberi nilai pada suatu variabel / constants, operator ini disimbolkan dengan sama dengan `=`. Cara penggunaannya adalah sebagai berikut:

```js
let variabel;
console.log(variabel); // undefined

variabel = 1;
console.log(variabel); // 1

const konstanta = 'SATU';
console.log(konstanta); // 'SATU'
```

## Destructure

Selain untuk mengisi nilai variabel, operator ini berguna pula untuk men-destruktur nilai dari suatu object atau array. Mari kita praktekan (HAH~!, QITA?) dengan beberapa code berikut:

#### Tanpa menggunakan desctructure assignment

```js
const makanan = ['siomay', 'bakso', 'nasi ayam bawang'];
const siomay = makanan[0];
const bakso = makanan[1];

console.log(siomay, bakso);
```

## Mix Assignment with other operators

Operator assignment juga dapat dicampur dengan operator lainnya, sehinggan memudahkan untuk melakukan operasi yang membutuhkan nilai sebelumnya yang kemudian nilainya akan langsung disimpan.

```js
let harga = 1000;

harga += 1000; // harga + 1000
console.log('harga += 1000', harga);

harga -= 1000; // harga - 1000
console.log('harga -= 1000', harga);

harga *= 2; // harga * 2
console.log('harga *= 2', harga);

harga /= 2; // harga / 2
console.log('harga /= 2', harga);
```

Output:

```js
harga += 1000 = 2000;
harga -= 1000 = 1000;
harga *= 2 = 2000;
harga /= 2 = 1000;
```

Sederhananya, seperti ini:

- `harga = 1000`: harga didefinisikan sebesar 1000.

- `harga += 1000` atau seperti ini `harga = harga + 1000`: harga akan diisi dengan harga sebelumnnya kemudian ditambahkan dengan 1000.

#### Dengan menggunakan descturcture

```js
const makanan = ['siomay', 'bakso', 'nasi ayam bawang'];
const [siomay, bakso] = makanan;

console.log(siomay, bakso);
```

kedua code diatas akan menghasilkan:

```js
siomay bakso
```

Mengapa bisa begitu?

Mari kita ingat-ingat jika array [adalah kumpulan nilai yang bisa diakses nilainya melalui index](/js101/introduction/2-data-types/), nah di code pertama dapat terliat ada assignment untuk mengisi nilai variabel siomay dengan nilai dari makanan dengan index nol (0), `const siomay = makanan[0];`, dan akan mencetak `'siomay'` jika variabel siomay dipanggil. Sama seperti statement assignment `const [siomay, bakso] = makanan;` yang merepresentasikan index dari array dengan menggunakan **posisinya**. Variabel `siomay` di code kedua akan diisi dengan nilai dari index pertama dari array `makanan` karena `siomay` menempati posisi awal, dan `bakso` akan diisi dengan nilai dari index kedua variabel array `makanan`.

Mari lanjut ke contoh yang sedikit lebih kompleks:

```js
const makanan = [
  {
    harga: 18000,
    nama: 'siomay',
  },
  {
    harga: 14500,
    nama: 'bakso',
  },
  {
    harga: 24000,
    nama: 'Nasi Ayam bawang',
  },
];

const [siomay, baso] = makanan;

console.log(siomay.nama, siomay.harga);
console.log(baso.nama, baso.harga);
```

ketika dijalankan akan menghasilkan output sebagai berikut:

```js
siomay 18000
bakso 14500
```

mengapa bisa begitu?

Sama seperti contoh code pertama. Karena variabel makanan berisikan array yang terdiri dari object makanan yang memiliki attribut `harga` dan `nama`, sehingga dapat di 'destructure' menjadi tuple `[siomay, baso]`, `siomay` menjadi variabel yang akan terisi nilai dari index pertama variabel makanan: `{harga: 18000, nama: 'siomay'}`, dan `bakso` dari index kedua.

Selain array, object juga dapat didesctructure. Bedanya object didestructure dengan menggunakan `key`. mari kita praktekkan dengan code berikut:

```js
const NASI_AYAM_BAWANG = {
    harga: 24000,
    nama: 'Nasi Ayam bawang',
  },

const { nama, harga } = NASI_AYAM_BAWANG;

console.log(nama, harga);
```

Dapat diperhatikan ketika destructure terjadi, kita menggunakan key `nama`, dan `harga` tanpa mempedulikan posisinya. Sehingga ketika dijalankan akan menghasilkan output sebagai berikut:

```js
Nasi Ayam Bawang 24000
```

Sudah cukup mungkin ya untuk bahas operator assignment di javascript, jika ada yang mau ditanyakan silahkan mensyen gue di twitter [@sadevva\_](https://twitter.com/sadevva_).

Cheers 🥂
