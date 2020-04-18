---
title: Operator perbandingan di Javascript
date: 2020-04-10
description: Cocoklah untuk yang bingung dengan penggunaan statement yang butuh kondisi seperti looping, dan branching.
heroImage: https://images.unsplash.com/photo-1560864495-a6bd2a912ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1258&q=80
photographer: Coffee Geek
unsplashAccount: coffeegeek
series: js101
seasonTitle: operators
season: 2
episode: 3
isPublished: true
---

# Operator persamaan ( == / === )

Di js, untuk membandingkan nilai antara dua buah primitive atau variabel dapat dilakukan dengan menggunakan operator persamaan. Operator persmaan dalam javascript terbagi menjadi dua, yaitu persamaan berdasarkan nilai atau _equality_ (==), dan persamaan berdasarkan nilai dan tipe nya atau _strict equality_ (===).

Contoh penggunaan:

```js
1 == 1; // true
1 === 1; // true
1 == '1'; // true
1 === '1'; // false
```

Perlu diperhatikan saat membandingkan nilai dengan operator persamaan, jika ekspektasi dari nilai yang akan dibandingkan adalah sama dan tipenya pun juga sama, gunakanlah selalu operator persamaan _strict equality_, karena selain membandingkan nilai, tipe nya pun akan dicheck, contoh pada `1 === '1'` akan menghasilkan `false`, karena nilainya benar sama, namun tipenya berbeda, yaitu `number` dan `string`.

# Operator pertidaksamaan ( != / !== )

Selain persamaan, terdapat juga operator untuk check pertidaksamaan antar nilai atau variabel, sama dengan operator persamaan, operator ini pun juga memiliki _strict inequality_ operator dengan menggunakan (`!==`).

Contoh penggunaan:

```js
1 != 1; // false
1 !== 1; // false
1 != '1'; // false
1 !== '1'; // true
```

# Operator relasional ( > , <, >=, <= )

Operator ini digunakan untuk membandingkan dua nilai numerik.

Terdiri dari beberapa operator:

| Symbol | Deskripsi                    |
| ------ | ---------------------------- |
| >      | lebih dari                   |
| <      | kurang dari                  |
| >=     | lebih dari atau sama dengan  |
| <=     | kurang dari atau sama dengan |

Contoh Penggunaan:

```js
1 > 1; // false
1 >= 1; // true
1 < 1; // false
1 <= 1; // true

1 > 2; // false
1 >= 2; // false
1 < 2; // true
1 <= 2; // true
```

Dalam operator relational, hanya nilai saja yang dibandingkan, tak ada operator _strict_ yang dapat membandingkan nilai dan tipe.

# Special Case, Null & Undefined

Membandingkan `null` dan `undefined` dengan operator persamaan.

```js
null === undefined; // false
null == undefined; // true

null !== undefined; // true
null != undefined; // false
```

Terdapat aturan khusus dimana kedua nilai yang bersifat _falsy_ ini jika dibandingkan dengan persamaan _non strict equality_ akan bernilai true, sementara dengan operator _strict equality_ akan bersifat false, karena null dan undefined memiliki tipe yang berbeda.

Membandingkan `null` dengan nilai 0 menggunakan operator relational.

```js
null > 0; // false
null >= 0; // true
null < 0; // false
null <= 0; // true
```

Ketika terdapat operator relational, `null` akan dikonversi kedalam nilai numerik, yaitu 0, berikut adalah code untuk membuktikannya:

```js
null > -1; // true
null >= 0; // true
null <= 0; // true
null < 1; // true
```

Membandingkan `undefined` dengan nilai 0 menggunakan operator relational.

```js
undefined > 0; // false
undefined >= 0; // false
undefined < 0; // false
undefined <= 0; // false
```

Berbeda dengan `null`, `undefined` akan dikonversikan kedalam `NaN`, nilai `NaN` akan selalu menghasilkan `false` jika di bandingkan dengan bilangan lain. sehingga akan selalu menghasilkan nilai `false` seperti kode diatas.

# Weird Case 0.1 + 0.2 === 0.3 returns false!

Kasus ini banyak terjadi, cukup aneh memang, penjelasan singkat mengapa kode `0.1 + 0.2 === 0.3` menghasilkan `false` karena `0.1 + 0.2` tidak akan menghasilkan bilangan `0.3` melainkan bilangan `0.30000000000000004`. Ini terjadi karena javascript selalu menyimpan data numerik dengan tipe data double precision float. Penjelasan lengkap dapat di lihat di [artikel medium ini](https://medium.com/better-programming/why-is-0-1-0-2-not-equal-to-0-3-in-most-programming-languages-99432310d476).

Okay, sekarang sudah siap untuk bikin kondisi buat branching dan looping nih,

Cheers 🥂
