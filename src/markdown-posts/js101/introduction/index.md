---
title: Mengenal Dasar Javascript, Hello World!
date: 2020-03-19
description: Semuanya diawali dengan menyapa dunia~
heroImage: https://images.unsplash.com/photo-1553404955-af4e8fc7f99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60
photographer: Kevin Butz
unsplashAccount: kevin_butz
series: js101
seasonTitle: basic
season: 1
episode: 0
isPublished: true
---

Hello World!

Jika kalian sebelumnya sudah pernah membuat program, pastinya sudah tau kan ritual awal para programmer jika menemukan teknologi atau bahasa pemrograman baru? Kalau belum mari kita kenalan dengan Hello world.

Tujuan dari hello world adalah mencetak kalimat 'Hello World' tanpa petik di terminal / browser / UI lainnya. Dengan mencetak hello world diharapkan kalian dapat memastikan minimal installasi node js kalian berhasil. Kali ini kita (hah? kita) coba cetak hello world di terminal ya. Pastikan kalian sudah mengunduh dan memasang node js.

Jika sudah, mari buka terminal / cmd kalian, dan jalankan perintah:

```sh
node
```

Kemudian, akan tampil intepreter dengan teks seperti berikut:

```sh
Welcome to Node.js v13.11.0.
Type ".help" for more information.
>
```

intepreter runtime node js akan menunggu perintah dari kalian, mari kita (hah, kita?) jalankan perintah untuk mencetak teks di console / terminal / cmd

```js
console.log('Hello World');
```

jika sudah akan muncul:

```bash
Welcome to Node.js v13.11.0.
Type ".help" for more information.
> console.log('Hello World')
Hello World
undefined
>
```

Selamat, kalian sudah berhasil membuat program sederhana dengan menggunakan javascript. Nah sekarang pertanyaannya kok bisa keluar teks Hello World gitu sih? Bingung?

Mari kita telaah perintah:

```js
console.log('Hello World');
```

Perintah tersebut terdiri dari objek `console` yang memanggil fungsi `log` dengan parameter `'Hello World'`.

**Bentar bang, apasih _objek_, _fungsi_ dan _parameter_?**

Sederhananya objek itu adalah representasi dari benda nyata, yang memiliki beberapa fungsi tertentu, dan fungsi ini dapat memiliki input berupa data yang dimasukan melalui parameter. Nah untuk mengakses fungsi atau atribut dalam suatu objek, kita gunakan titik.

Mari kita berandai andai~

Tadi, kita anggap `console` adalah sebuah objek, nah kita anggap `console` ini adalah terminal / cmd kita, dan benda `console` ini punya fungsi bernama `log` yang tugasnya (atau berfungsi) untuk mencetak teks ke layar dengan data yang diberikan atau nama lainnya `parameter`, dari perintah tadi, kita pakai teks `'Hello World'` sebagai parameter karena kita ingin mencetak teks 'Hello World' ke layar terminal. Sehingga bila kita gabungkan menjadi:

```js
console.log('Hello World');
```

Maka akan tampil lah teks 'Hello World' di layar terminal.

**Oke bang, tapi itu kok petik nya ngga kecetak juga ya ke layar'**

Petik yang mengapit teks Hello World menyatakan bentuk atau tipe data yang kita pakai adalah String atau Teks, javascript tidak dapat mengenali data yang kita masukan adalah teks bila tidak diberi petik.

Kita telah selesai menjalankan perintah melalui terminal, nah sekarang kita akan coba menulis program dalam bentuk file javascript (.js).

Pertama buatlah file baru dengan ekstensi .js, dan beri nama hello-world.js.

kemudian dalam file hello-world.js, mari kita tuliskan perintah berikut:

```js
console.log('Halo Halo Dunia');
```

jika sudah kembali ke terminal, dan pastikan kalian berada dalam satu direktori dengan file hello-world.js, lalu jalankan perintah

```bash
node hello-world.js
```

nanti akan tampil dilayar terminal kalian teks seperti ini:

```bash
Halo Halo Dunia
```

Nah, sekarang kita sudah selesai membuat program sederhana dan juga kita sudah berusaha memahami apa yang terjadi dalam program sederhana yang telah kita buat, jika masih ada hal yang membuat bingung, jangan ragu - ragu untuk bertanya atau membuat issue di github di [link Ini issue ini](https://github.com/hare451g/hare451g.github.io/issues).

Semoga artikel ini dapat bermanfaat dan sampai jumpa di artikel berikutnya.

Cheers.
