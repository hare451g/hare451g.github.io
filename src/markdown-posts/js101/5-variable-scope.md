---
title: Variable Scope
date: 23-03-2020 16:00
description: Mencoba memahami lebih dalam mengenai variabel dan jangkauan dari suatu variabel.
heroImage: https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
series: js101
isPublished: false
---

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
