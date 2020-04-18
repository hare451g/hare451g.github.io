---
title: Operator untuk mengolah string di javascript
date: 2020-04-12
description: Berguna untuk yang mau gabungin dua buah string dengan mudah.
heroImage: https://images.unsplash.com/photo-1535587566541-97121a128dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
photographer: Caio Silva
unsplashAccount: caiohenriquesilva
series: js101
seasonTitle: operators
season: 2
episode: 5
isPublished: true
---

Sebenarnya sih, operator string ini hanya terdiri dari operasi concat saja, dengan menggunakan plus `+` diantara kedua string seperti ini:

```js
const text = 'lorem' + 'ipsum';
console.log(text);
```

dari code diatas akan menghasilkan output:

```
loremipsum
```

untuk mempermudah lagi dalam penyisipan variabel, dalam ES6 terdapat string yang diapit oleh tilde (\`) yang memungkinkan untuk menyisipkan nilai kedalam suatu text yang diapit oleh tilde.

contoh:

```js
const firstName = 'hendra';
const lastName = 'sadewa';
const age = 18;

console.log(`My name is ${firstName} ${lastName}, I'm ${age} years old`);
```

jika di running akan mencetak text seperti ini:

```
My name is hendra sadewa, I'm 18 years old
```

### Weird Case: string plus number

oke kasus wqwqwqwq nya begini:

```js
console.log(1 + 1);
console.log(1 + '1');
console.log(1 - 1);
console.log(1 - '1');
```

nah, jika di running akan menghasilkan:

```
2
11
0
0
```

whyyy, `1+'1'` menghasilkan `11` tapi kenapa `1-'1'` jadinya `0`?

Karena operator `+` cukup ambigu, dapat digunakan operasi concat (menyambung string) dan juga pertambahan. Sementara operator minus `-` hanya digunakan untuk operasi pengurangan saja, sehingga dalam operasi pengurangan menggunakan string, string yang berisi number akan diconvert menjadi `number`

contoh:

```js
console.log('100' - '50');
console.log('100' - 50);
console.log(100 - '50');
```

tentu ketiga statement itu akan menghasilkan `50`.

```
  50
  50
  50
```

wqwqwqwqwqwq aneeeh aneeeh, yasudalah ya udahan dulu.

Cheers 🥂
