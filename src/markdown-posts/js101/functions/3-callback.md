---
title: Callback function
date: 2020-05-16
description: Ya fungsi yang di pass ke fungsi lain yang nantinya akan dipanggil dalam fungsi nya~ pusing kan~
heroImage: https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
photographer: Pavan Trikutam
unsplashAccount: ptrikutam
series: js101
seasonTitle: functions
season: 3
episode: 3
isPublished: true
---

Fungsi dalam javascript dianggap sebagai object, oleh karena itu fungsi dapat memungkinkan untuk passing fungsi sebagai parameter fungsi. Fungsi yang di-passing kedalam argumen fungsi disebut dengan _Callback Function_. Tujuannya adalah untuk mengatur kapan fungsi ini dipanggil atau di-_callback_.

![](https://media.giphy.com/media/10HHiQbUEcOMr6/giphy.gif)

Sedikit bikin bingung ya, mari kita (HAAAA? QYTAA!?) check contoh berikut:

```js
function greeting(name) {
  console.log(`Hello ${name}`);
}

function greetMe(callback, name) {
  console.log('Welcome back');
  callback(name);
}

greetMe(greeting, 'Hendra');
```

Dari contoh diatas, function `greeting` akan dipanggil di dalam function `greetMe`.

Tujuannya apa ya, bukannya lebih ribet gan? Nah, tujuannya agar fungsi yang di passing lewat argumen / _callback function_ dapat diatur pemanggilannya.

Mari kita coba solve kasus ini:

**Buatlah fungsi countdown yang akan menghitung mundur dari sekian detik, kemudian jika waktu habis tampilkan message "Waktu habis", jika waktu belum habis, tampilkan siswa waktu dalam detik.**

Untuk membuat countdown, kita butuh interval, tujuannya untuk mengulang suatu statement dengan delay sekian detik.

```js
setInterval(callback, delayTimeInMs);
```

SetInterval memiliki dua buah parameter yaitu:

- `callback`: function yang harus dijalankan selama interval berlangsung.
- `delayTimeInMs`: jumlah waktu delay setiap interval dalam satuan milidetik.

Ok, sekarang mari buat function countdown. Jika dipahami melalui deskripsi kasus spesifikasi dari fungsi countdown adalah:

- memiliki parameter:
  - `count`: bilangan yang akan menjadi acuan untuk menghitung mundur.
  - `message`: pesan yang akan ditampilkan ketika waktu habis.
- memiliki body function berisi statement:
  - definisikan interval yang akan mengurangi nilai `count` setiap interval terjadi.
  - pada setiap interval, check apakah nilai `count` sudah habis.
  - jika sudah habis, akan mencetak `message`.
  - jika belum habis tampilkan siswa waktu.
- memiliki definisi konstanta:
  - `delay = 1000`: 1000 didapat dari konversi milidetik ke detik (1 detik = 1000 milidetik).

Solusi dalam code:

```js
function countDown(count = 10, message) {
  const delay = 1000;
  const interval = setInterval(onTimeInterval, delay);

  function onTimeInterval() {
    count--;
    console.log(count);
    if (count <= 0) {
      console.log(message);
      clearInterval(interval);
    }
  }
}

countDown(10, 'Waktu habis');
```

perhatikan pada bagian:

```js
setInterval(onTimeInterval, delay);
```

terdapat _passing_ fungsi `onTimeInterval` kedalam `setInterval`, yang nantinya akan dijalankan ketika interval terjadi.

Jika di run, program akan menghasilkan output seperti ini:

```js
9
8
7
6
5
4
3
2
1
0
Waktu habis
```

Kasus sudah solved dengan program yang telah dibuat.

but wait,

![](https://media.giphy.com/media/3o7btZ1Gm7ZL25pLMs/giphy.gif)

**Q**: Hmm, kenapa ngga `console.log()` aja bang setelah panggil countdown? kek gini ni misalnya:

```js
function countDown(count) {
  const delay = 1000;
  const interval = setInterval(onTimeInterval, delay);

  function onTimeInterval() {
    count--;
    console.log(count);
    if (count <= 0) {
      clearInterval(interval);
    }
  }
}

countDown(10);
console.log('Waktu habis');
```

**Q**: Bukannya bakalan _nyetak_ message, setelah countdown-nya selesai?

**A**: Ngga bisa gan, hasilnya bakalan jadi seperti ini:

```
Waktu habis
9
8
7
6
5
4
3
2
1
0
```

**Q**: haaaa?

![](https://media.giphy.com/media/2XskdWuNUyqElkKe4bm/giphy.gif)

**A**: Teks "Waktu habis" akan di cetak duluan dikarenakan proses setInterval yang akan dijalankan secara _asynchronous_, artinya kode akan dieksekusi tanpa menunggu proses sebelumnya selesai. Oleh karena itu js akan melanjutkan ke statement `console.log` yang terletak setelah pemanggilan function `countdown`. Oleh karena itu kita dapat menggunakan callback untuk mengatur agar statement untuk mencetak `"Waktu habis"` dipanggil setelah waktu nya habis.

Okay, untuk callback sepertinya sampai sini dulu, kita akan bahas implementasi callback lebih lengkap dalam section array dan juga asynchronous.

thanks for your time and cheers 🥂
