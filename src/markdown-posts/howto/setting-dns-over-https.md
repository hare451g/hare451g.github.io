---
title: Cara Setting DNS Over HTTPS (DoH) Firefox
date: 20-03-2020
description: Setting DoH di firefox dengan menggunakan DNS Cloudflare 1.1.1.1, EZ~
heroImage: https://media.giphy.com/media/11S3e44upmuPTi/giphy.gif
series: howto
---

Pernahkah kalian sedang ada bug di production dan sedang research dan menemukan calon solusi dari permasalahan kalian namun solusi tersebut terletak di reddit, dan pas kalian buka ternyata di block oleh ~~first-indi-net~~ provider internet kesayangan kalian.

![kezel bang](https://media.giphy.com/media/DOdsiolqbxCbm/giphy.gif).

_kzl 💢_

Daripada kesel terus dengan kerjaan kemkominfo yang tukang blokir situs yang padahal situsnya berguna, hayuk kita coba gunain teknik DoH. DoH memungkinkan kita (hah!? kita), untuk akses DNS via Https, selain berguna untuk membuka [reddit](https://reddit.com), DoH juga dapat mencegah adanya serangan Man-in-the-Middle. Oiya, DoH membutuhkan DNS selain default dns, untuk saat ini, mari kita gunakan DNS milik [cloudflare](https://1.1.1.1/).

Untuk setting DoH di firefox, ikuti langkah berikut:

1. Buka Web Browser Firefox.

2. Klik hamburger menu, dan pilih preferences, atau cara cepat nya ketik `about:preferences` di search bar dan tekan `ENTER`.

3. Find dengan keyword `DNS` di search bar, atau scoll ke bagian paling bawah sampai menemukan kategori `Network Settings`.

4. Hasil pencarian akan menampilkan kategori `Network Settings`, lalu klik button `Settings...`.

5. Setelah muncul pop-up connection settings, pada bagian paling bawah, klik checkbox dengan label `Enable DNS over HTTPS`.

6. Pada bagian `Use Provider` pilih `Cloudflare (Default)` lalu tekan button `OK`.

7. Restart firefox, dan open situs yang kalian inginkan.

![yeah](https://media.giphy.com/media/tyxovVLbfZdok/giphy.gif)

Cheers 🥂, selamat sekarang sudah bisa buka [reddit](https://reddit.com), mari kita buka [4chan](https://4chan.org/g).