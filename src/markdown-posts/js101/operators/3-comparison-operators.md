---
title: Operator and Expression | Comparison
date: 2020-04-10
description: Cocoklah untuk yang bingung dengan penggunaan statement yang butuh kondisi seperti looping, dan branching.
heroImage: https://images.unsplash.com/photo-1560864495-a6bd2a912ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1558&q=80
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

```js
1 > '1'; // false
1 >= '1'; // true
1 < '1'; // false
1 <= '1'; // true

1 > '2'; // false
1 >= '2'; // false
1 < '2'; // true
1 <= '2'; // true
```
