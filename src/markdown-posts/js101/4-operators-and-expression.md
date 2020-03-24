---
title: Operator and Expression
date: 22-03-2020
description: Mencoba memahami tipe data yang ada di dalam javascript beserta cara menggunakan variabel.
heroImage: https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
series: js101
isPublished: false
---

## Variable

Variable adalah wadah untuk nilai yang dapat di re-assign dengan nilai baru. Dalam javascript nilai dari variabel dapat berupa nilai primitif (bilangan bulat, text / string) ataupun non-primitif seperti array dan function.

Berdasarkan scope/jangakauannya, variable terbagi dua jenis, yaitu `var` dan `let`.

```js
var name = 'Hendra Sadewa';

function greeting() {
  console.log('hello ' + name);
}
```

Deklarasi Block scope variable:

```js
var name = 'pizzas';

var isFoodExist = function() {
  let foods = ['Burger', 'ketan'];
  foods.find(food => food === name);
};
```

## Constants
