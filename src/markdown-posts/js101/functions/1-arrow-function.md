---
title: Functions dan Arrow Functions
date: 2020-05-12
description: function biasa dan function yang disimpan dalam variable anonymous function, gitu deh.
heroImage: https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
photographer: Taras Shypka
unsplashAccount: bugsster
series: js101
seasonTitle: functions
season: 3
episode: 1
isPublished: true
---

Pada [artikel sebelumnya](/js101/functions/) yang membahas cara membuat function, menjelaskan cara untuk membuat function adalah dengan bentuk seperti ini:

```js
function namaFunction(argument) {
  // function body
  return 'some value';
}

// function calling
namaFunction('abc');
```

JavaScript memungkinkan menyimpan function kedalam suatu variabel, dengan cara mendefinisikan anonymous function / lambda dan menyimpannya kedalam suatu variabel.

```js
const namaFunction = function(argument) {
  // function body
  return 'some value';
};

// function calling
namaFunction('abc');
```

even better, es6 menyediakan notasi **arrow function** atau **fat arrow function** `() => { }`:

```js
const namaFunction = argument => {
  // function body
  return 'some value';
};

// function calling
namaFunction('abc');
```

atau jika function langsung me-return value dapat ditulis dengan bentuk:

```js
const namaFunction = argument => 'some value';
```

Untuk mempermudah dalam memahami penulisan arrow function, mari gunakan untuk solve kasus ini:

**Buatlah perhitungan faktorial, dengan satu parameter bilangan sebagai pembatas faktorial.**

misal:

`faktorial(4)` akan menghasilkan `24` karena `1 x 2 x 3 x 4` adalah `24`.

#### Solusi

Solving dengan menggunakan `function` biasa:

```js
function faktorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * faktorial(n - 1);
}
```

Solving dengan _anonymous function_:

```js
const faktorial = function(n) {
  if (n <= 1) {
    return 1;
  }
  return n * faktorial(n - 1);
};
```

Solving dengan menggunakan Arrow function `() =>`:

```js
const faktorial = n => {
  if (n <= 1) {
    return 1;
  }
  return n * faktorial(n - 1);
};
```

atau lebih singkat lagi, model _one-liner_:

```js
const faktorial = n => (n <= 1 ? 1 : n * faktorial(n - 1));
```

Semua solusi diatas memiliki output yang sama. Silahkan dicoba di console browser / terminal yang terinstall node.

### Kapan arrow function tak dapat digunakan?

Ok, arrow function memang terlihat dapat mempersingkat dalam penulisan code, namun apakah harus selalu pakai arrow function?

tidak, ada beberapa situasi dimana arrow function tak dapat digunakan.

#### Kondisi 1: penggunaan `this` dalam object

Tidak seperti `function` biasa, arrow function tidak memiliki `this` yang merujuk ke dirinya, sehingga akan mengembalikan nilai `undefined`.

Contoh:

```js
const robot = {
  firstName: 'han',
  lastName: 'tyumi',
  getFullName() {
    return `${this.firstName}-${this.lastName}`;
  },
};

console.log(robot.getFullName());
// han-tyumi
```

dengan arrow function:

```js
const robot = {
  firstName: 'han',
  lastName: 'tyumi',
  getFullName: () => `${this.firstName}-${this.lastName}`,
};

console.log(robot.getFullName());
// undefined-undefined
```

#### Kondisi 2: hoisting

Karena function dalam arrow function adalah anonymous / lambda function yang di store dalam variabel, jika belum di inisialisasi maka function tersebut tak dapat dikenali. Beda dengan function yang didefinisikan sebagai function, akan di hoist oleh javascript sehingga tetap dapat digunakan.

Contoh:

Jika menggunakan `function`

```js
console.log(greet('hendra')); // hello hendra

function greet(name) {
  return `hello ${name}`;
}
```

Jika menggunakan arrow function `() => {}`

```js
console.log(greet('hendra'));
// ReferenceError: Cannot access 'greet' before initialization

const greet = name => `hello ${name}`;
```

### `this` dalam Arrow Function

Karena arrow function tidak memiliki `this` yang merujuk ke diri nya, maka sangat berguna bila ingin menggunakan `this` yang merujuk ke konteks global.

Biar ngga bingung mari lihat contoh ini:

**Buatlah fungsi hitung mundur selama dua detik, akan mencetak angka yang tersisa bila kurang dari 2 detik dan akan berhenti dan mencetak waktu habis setelah dua detik.**

**Solusi**:

Dengan function

```js
function countDown() {
  this.message = 'Waktu habis';
  this.count = 2;

  const context = this; // assign nilai 'this' ke context agar dikenali di interval

  this.interval = setInterval(function() {
    context.count--;
    console.log(context.count);
    if (context.count <= 0) {
      console.log(context.message);
      clearInterval(context.interval);
    }
  }, 1000);
}

countDown();
```

Dengan arrow function

```js
function countDown() {
  this.message = 'Waktu habis';
  this.count = 2;

  this.interval = setInterval(() => {
    this.count--;
    console.log(this.count);
    if (this.count <= 0) {
      console.log(this.message);
      clearInterval(this.interval);
    }
  }, 1000);
}

countDown();
```

Jika dengan function biasa, nilai `this` perlu di assign kedalam variabel, agar tidak tercampur dengan `this` yang ada di dalam function callback setInterval. Sementara dengan _arrow function_ nilai `this` merujuk tepat ke konteks global jadi tak perlu lagi meng-assign nilai `this` kedalam variabel.

Okay segitu dulu buat function dan arrow function, semoga bermanfaat.

Cheers 🥂
