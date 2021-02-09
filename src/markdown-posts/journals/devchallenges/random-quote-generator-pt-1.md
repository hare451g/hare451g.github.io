---
title: Random Quote Generator - 1
date: 2021-02-07
description: Solusi dari tantangan devchallenges.io - random quote generator bagian persiapan
heroImage: https://images.unsplash.com/photo-1511465390398-532913e8328d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80
photographer: Mert Talay
unsplashAccount: merttly
series: journal
seasonTitle: front-end
season: 1
episode: 1
isPublished: true
---

# Dev challenges Solution - Random Quote Generator

Kali ini akan membahas pengerjaan tantangan dari [devchallenges.io](https://devchallenges.io) tentang [Random quotes generator](https://devchallenges.io/challenges/8Y3J4ucAMQpSnYTwwWW8).

Tantangannya cukup simple, hanya membuat web-app quote generator, untuk lebih jelasnya terdapat user-story sebagai berikut:

- I can see a random quote
- I can generate a new random quote
- When I select quote author, I can see a list of quotes from them.
- I can see quote genre under the author.

Karena ini adalah tantangan pada path [Front-end Developer](https://devchallenges.io/paths/frontEndPaths), jadi hanya perlu consume data dari api saja. API pun sudah disediakan yaitu dengan menggunakan [Quote Garden API](https://pprathameshmore.github.io/QuoteGarden/).

## Persiapan

Untuk menyelesaikan tantangan kali ini akan menggunakan tools & framework sebagai berikut:

- [Typescript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org)
- [CRA / Create React App](https://create-react-app.dev/)
- [Axios](https://github.com/axios/axios)

### Init Project

Dikarenakan untuk project ini menggunakan typescript, untuk initialize react project bisa menggunakan perintah:

`yarn create react-app random-quote --template typescript`

yang akan mempersiapkan boilerplate code Project React js + Typescript, jadi ngga perlu lagi setup `tsconfig` secara manual.

Setelah selesai remove semua files yang tidak terpakai seperti [commit ini](https://github.com/hare451g/dc-random-quotes/commit/83f2312b6046fada93c4479e0508f7c78c8587df) tujuannya adalah membersihkan code yang tidak perlu.

Selanjutnya akan dilanjutkan dengan mendefinisikan interfaces sesuai dengan spesifikasi userstory.

Keep in touch for the updates ya!
Cheers 🥂,
