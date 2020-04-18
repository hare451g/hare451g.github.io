---
title: Kenalan dengan ternary operator
date: 2020-04-13
description: Buat yang males pake if - else
heroImage: https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
photographer: Javier Allegue Barros
unsplashAccount: soymeraki
series: js101
seasonTitle: operators
season: 2
episode: 6
isPublished: true
---

Mungkin Anda adalah insan yang terlahir malas sekali untuk menulis statement percabangan `if - else` di muka bumi ini. Selamat, Anda terselamatkan dengan adanya operator ternary ini.

Cara penulisannya seperti ini:

```js
  kondisi
    ? statement yang dijalankan jika kondisi bernilai true
    : statement yang dijalankan jika kondisi bernilai false
```

Simple sekali bukan? daripada ngetik `if-else`. Mari kita coba (HAH! [udah bang udah]) coba praktekan dengan kasus seperti ini:

### Kasus

Untuk memasuki situs abc-tube, umur harus 18 tahun keatas, jika kurang maka akan ditolak dengan menampilkan message penolakan karena belum cukup umur.

### Solusi

Intinya jika lebih atau sama dengan dari 18 tahun atau `UMUR >= 18`. Jika lolos kondisi ini maka cetak `'Silahkan masuk'`, jika tidak maka cetak `'Anda belum cukup umur'`.

#### Code

jika menggunakan `if - else`

```js
const UMUR = 16;

let message = '';

if (UMUR >= 18) {
  message = 'Silahkan masuk';
} else {
  message = 'Anda belum cukup umur';
}
```

Jika menggunakan ternary `? :`

```js
const UMUR = 16;
const message = UMUR >= 18 ? 'Silahkan masuk' : 'Anda belum cukup umur';
console.log(message);
```

Kedua code diatas akan mencetak `Anda belum cukup umur` karena nilai variabel `UMUR` adalah 16, tida sesuai dengan kondisi yang diberikan yaitu `UMUR >= 18`.

Memang menghasilkan output yang sama, namun ternary memiliki penulisan yang lebih singkat dibanding `if-else`. Memang lebih singkat, tapi untuk orang yang belum ~~baca artikel ini mana ngerti wqwqwq~~ memahami maksud dari operator ini akan sedikit bingung, ~~yaelah sama kek if else di excel si~~ jadi dalam penulisan memang lebih jelas untuk dibaca tetaplah `if-else`.

### Kapan sih Saat yang Tepat untuk Menggunakan Ternary?

Sebenarnya sih kapan aja bisa ya, tapi lebih tepat adalah ketika membutuhkan value yang harus diisi kedalam suatu variabel contoh seperti kasus sebelumnya. Namun bila hanya untuk memanggil suatu fungsi yang tak mereturn value, ternary dirasa kurang tepat karena kurang jelas untuk dibaca.

Mari bandingkan kedua code dibawah:

```js
const isLoggedIn = false;
const age = 18;

if (age >= 18) {
  if (isLoggedIn) {
    console.log('anda sudah login');
  } else {
    console.log('anda belum login');
  }
} else {
  console.log('anda belum cukup umur');
}
```

```js
const isLoggedIn = false;
const age = 18;

age >= 18
  ? isLoggedIn
    ? console.log('anda sudah login')
    : console.log('anda belum login')
  : console.log('anda belum cukup umur');
```

Kedua nya akan menghasilkan output yang sama yaitu `anda belum login`, namun pada code yang menggunakan if-else terlihat jelas flow program, sedangkan dengan menggunakan ternary akan sedikit sulit untuk memahami nya.

jadi, sudah ngerti ya soal operator yang cukup asik ini, semoga membantu.

Cheers 🥂
