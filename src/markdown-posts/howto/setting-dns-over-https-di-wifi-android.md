---
title: Cara Setting DNS Over HTTPS (DoH) di HP Android 10
date: 2020-03-21
description: Setting DoH di handphone Android 10 (WiFi only) dengan menggunakan DNS Cloudflare 1.1.1.1
heroImage: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80
photographer: Taylor Vick
unsplashAccount: tvick
series: howto
seasonTitle: internet
season: 1
episode: 2
isPublished: true
---

Pernahkah kalian sedang ada bug di production dan sedang research dan menemukan calon solusi dari permasalahan kalian namun solusi tersebut terletak di reddit, dan pas kalian buka ternyata di block oleh ~~first-indi-net~~ provider internet kesayangan kalian.

![kezel bang](https://media.giphy.com/media/DOdsiolqbxCbm/giphy.gif).

_kzl 💢_

Daripada kesel terus dengan kerjaan kemkominfo yang tukang blokir situs yang padahal situsnya berguna, hayuk kita coba gunain teknik DoH. DoH memungkinkan kita (hah!? kita), untuk akses DNS via Https, selain berguna untuk membuka [reddit](https://reddit.com), DoH juga dapat mencegah adanya serangan Man-in-the-Middle. Oiya, DoH membutuhkan DNS selain default dns, untuk saat ini, mari kita gunakan DNS milik [cloudflare](https://1.1.1.1/).

~~COPAS DARI ARTIKEL SEBELUMNYA Y BANG!? wqwqwqwq~~

Untuk device yang dipakai adalah device Android 10 (Nokia 6.1 plus ), untuk device dan versi android lainnya mungkin berbeda, namun apa salahnya dicoba ~🎵

Mari ikuti langkah berikut:

1. Buka `Settings`

2. Pilih kategori `Network & Internet`.

3. Expand kategori `Advanced` dan pilih `Private DNS`

4. Pilih `Private DNS provider hostname`

5. Masukan `1dot1dot1dot1.cloudflare-dns.com`

6. Lalu pilih `Save`

7. Matikan dan nyalakan kembali jarignan WiFi di device anda, dan open situs yang kalian inginkan.

Semoga artikel ini dapat membantu kalian.

![yeah](https://media.giphy.com/media/tyxovVLbfZdok/giphy.gif)

Cheers 🥂, selamat sekarang sudah bisa buka [reddit](https://reddit.com), mari kita buka [4chan](https://4chan.org/g).

~~COPAS LAGI?! wqwqwqwq~~

eiya, kalo semisal kalian ada yang bisa gunakan langkah langkah tadi di versi android lain (misal 9 atau bahkan 8.1) kindly dm me ya atau mention saja di [twitter](https://twitter.com/sadevva_), thanks.
