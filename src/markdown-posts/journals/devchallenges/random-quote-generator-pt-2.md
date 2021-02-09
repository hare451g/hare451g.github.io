---
title: Random Quote Generator - 2
date: 2021-02-08
description: Solusi dari tantangan devchallenges.io - random quote generator bagian Quote Service, Interfaces & data types
heroImage: https://images.unsplash.com/photo-1511465390398-532913e8328d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80
photographer: Mert Talay
unsplashAccount: merttly
series: journal
seasonTitle: front-end
season: 1
episode: 2
isPublished: true
---

## Quote Service

Sebelum membuat tampilannya, mari tulis modul webservice untuk mengatur fetching data di setiap endpoints [Quote Garden API](https://pprathameshmore.github.io/QuoteGarden/), agar nantinya lebih mudah diolah.

Buatlah file dan folder sesuai dengan skema ini:

```
  src/
    lib/
      QuoteService/
        __test__/
          fetchByAuthor.test.ts
          fetchRandomQuotes.test.ts
        fetchByAuthor.ts
        fetchRandomQuotes.ts
        interfaces.ts
```

### Interfaces & Data Types

Hal pertama yang dilakukan adalah, check laman dokumentasi [Quote Garden API](https://pprathameshmore.github.io/QuoteGarden/) ini

Setelah membaca dokumentasi, info penting yang didapatkan adalah:

Terdapat 4 buah endpoints yaitu:

- Get random quotes

  - Memiliki response berisikan **list of quotes**
  - URL: `https://quote-garden.herokuapp.com/api/v3/quotes/random`.
  - tidak memiliki request parameters

- Get all quotes

  - Memiliki response berisikan **list of quotes**
  - URL: `https://quote-garden.herokuapp.com/api/v3/quotes`.
  - Memiliki Request parameters, yang akan dibuat interface `IQuoteRequestParams`:
    ```ts
    export interface IQuoteRequestParams {
      author?: string;
      genre?: string;
      query?: string;
      page?: number;
      limit?: number;
    }
    ```
    - Keterangan:
      - author: string menyatakan penulis quote
      - genre: string menyatakan genre dari quote
      - query: string keyword pencarian
      - page: bilangan menyatakan target halaman
      - limit: bilangan menyatakan batas dari quote yang diambil (default: 10)

- Get all quote genres

  - Memiliki response berisikan **list of string** yang menyatakan quote genre
  - URL: `https://quote-garden.herokuapp.com/api/v3/genres`.
  - tidak memiliki request parameters

- Get all quote authors
  - Memiliki response berisikan **list of string** yang menyatakan quote authors
  - URL: `https://quote-garden.herokuapp.com/api/v3/authors`.
  - tidak memiliki request parameters

Dari keempat endpoints tadi, ada dua jenis response yang akan dihasilkan, yaitu:

- response yang berisikan `list of quotes` sebagai di dalam field `data` yang memiliki skema object:
  ```js
    {
      "_id": "5eb17aaeb69dc744b4e72a4a",
      "quoteText": "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.",
      "quoteAuthor": "Bill Gates",
      "quoteGenre": "business",
      "__v": 0
    }
  ```
  Dapat kita definisikan type nya sebagai interface `IQuote`:
  ```ts
  interface IQuote {
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
    __v: number;
  }
  ```
- response yang berisikan `array of string` di dalam field data.

Untuk skema response tetap sama, yaitu:

```javascript
  {
    "statusCode": 200,
    "message": "Quotes",
    "pagination": {
      "currentPage": 1,
      "nextPage": 2,
      "totalPages": 4
    },
    "totalQuotes": 4,
    "data": [/* array of quotes / array of string*/]
  }
```

Untuk challenge kali ini, yang hanya digunakan adalah response yang memiliki nilai quote pada field `data`.

Berikut sedikit penjelasan tentang skema response yang dihasilkan endpoint Get all quotes dan get Random quotes

- `statusCode` yang menyatakan [http request status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
- `message` string berisikan pesan dari hasil request.
- `totalQuotes` number yang menyatakan jumlah dari quotes yang ada.
- `pagination` object yang digunakan untuk menyimpan informasi navigasi halaman yang sedang aktif. Namun pada endpoint get random quotes, nilai semua fields yang ada adalah `null`.

  Dapat didefinisikan sebagai interface `IQuotePagination`:

  ```ts
  export interface IQuotePagination {
    currentPage: number | null;
    nextPage: number | null;
    totalPages: number | null;
  }
  ```

Untuk skema response akan akan di definisikan sebagai interface berikut:

```ts
export interface IQuoteResponse<T> {
  message: string;
  statusCode?: number;
  error?: string;
  pagination?: IQuotePagination;
  totalQuotes?: number;
  data?: T;
}
```

Catatan:

- T dalam interface `IQuoteResponse` digunakan untuk menampung type yang akan di inject kedalam interface. Kunjungi [laman generic interface in typescript](https://www.typescriptlang.org/docs/handbook/generics.html) untuk lebih lanjut.

Buat alias untuk Quote response dengan menggunakan interface `IResponse` serta masukan type yang diperlukan:

```ts
export type IQuoteResponse = IResponse<Array<IQuote>>;
```

Hasil akhir dari file `interface.ts`:

```ts
export interface IQuoteRequestParams {
  author?: string;
  genre?: string;
  query?: string;
  page?: number;
  limit?: number;
}

export interface IQuotePagination {
  currentPage: number | null;
  nextPage: number | null;
  totalPages: number | null;
}

export interface IQuote {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  __v: number;
}

export interface IResponse<T> {
  message: string;
  statusCode?: number;
  error?: string;
  pagination?: IQuotePagination;
  totalQuotes?: number;
  data?: T;
}

export type IQuoteResponse = IResponse<Array<IQuote>>;
```

Selanjutnya, dilanjutkan dengan menulis functions untuk calling api dengan memanfaatkan http client (axios).

Keep in touch for the updates ya!
Cheers 🥂,
