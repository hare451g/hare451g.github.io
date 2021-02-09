---
title: Random Quote Generator - 3
date: 2021-02-09
description: Solusi dari tantangan devchallenges.io - random quote generator bagian Quote Service functions
heroImage: https://images.unsplash.com/photo-1511465390398-532913e8328d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80
photographer: Mert Talay
unsplashAccount: merttly
series: journal
seasonTitle: front-end
season: 1
episode: 3
isPublished: true
---

### Defining Functions

Dari keempat endpoints [pada artikel sebelumnya](/journals/devchallenges/random-quote-generator-pt-2/), yang akan digunakan hanyalah 2 endpoints saja, yaitu, [get random quotes](https://pprathameshmore.github.io/QuoteGarden/#get-a-random-quote) dan [get all quotes](https://pprathameshmore.github.io/QuoteGarden/#get-quotes) sesuai dengan [user story yang telah ditentukan](https://devchallenges.io/challenges/8Y3J4ucAMQpSnYTwwWW8).

#### To Fullfill - I can see a random quote & I can generate a new random quote

Gunakan endpoint `get random quotes` yang akan mengambil satu buah quote (dalam bentuk array 1 elemen).

Untuk membantu proses fetching data, install package axios beserta definisi type-nya dengan perintah:

```
  yarn add axios

  yarn add -D @types/axios
```

Sebelum menulis function, mari tulis terlebih dahulu test cases nya, sesuaikan dengan user story yang ada ya.

- Should have fetched quote with correct type definition
  - `quoteAuthor` should be defined and should be string.
  - `quoteText` should be defined and should be string.
  - `quoteGenre` should be defined and should be string.

Tulis di file `fetchRandomQuote.test.ts`:

```js
import fetchRandomQuotes from '../fetchRandomQuotes';

describe('Fetch Random Quotes', () => {
  it('Should have fetched quote with correct type definition', async () => {
    const result = await fetchRandomQuotes();

    if (result instanceof Error) {
      throw new Error(result.message);
    }

    const { quoteAuthor, quoteText, quoteGenre } = result;

    expect(quoteAuthor).toBeDefined();
    expect(typeof quoteAuthor).toBe('string');

    expect(quoteText).toBeDefined();
    expect(typeof quoteText).toBe('string');

    expect(quoteGenre).toBeDefined();
    expect(typeof quoteGenre).toBe('string');
  });
});
```

Oke test cases sudah jelas, tinggal menulis function agar pass test, Tulis di file `fetchRandomQuote.ts`.

1. Untuk mendapatkan random quote object, function haruslah bersifat _asynchronous function_ yang akan mengembalikan nilai `Promise` dengan type `IQuote` jika berhasil mengapatkan random quote dari API, atau `Error` jika gagal mengambil nilai quote, maka definisikan type dari functionnya seperti terlebih dahulu seperti berikut:

```js
type IFetchRandomQuotes = () => Promise<IQuote | Error>;
```

```ts
import { IQuote } from './interfaces';

type fetchRandomQuotesType = () => Promise<IQuote | Error>;

const fetchRandomQuotes: fetchRandomQuotesType = async () => {};
```

2. Gunakan `axios.get()` untuk calling api `https://quote-garden.herokuapp.com/api/v3/quotes/random` dan pastikan untuk membungkusnya dengan `try-catch`. Untuk menangani error, gunakan `error.message` sebagai return value.

```ts
import axios from 'axios';
import { IFetchRandomQuotes } from './interfaces';

type fetchRandomQuotesType = () => Promise<IQuote | Error>;

const fetchRandomQuotes: fetchRandomQuotesType = async () => {
  try {
    const response = await axios.get(
      'https://quote-garden.herokuapp.com/api/v3/quotes/random'
    );
  } catch (error) {
    return error.message;
  }
};
```

3. Lakukan penegasan bila data yang akan diambil dari response body axios atau `response.data` adalah memiliki type`IQuoteResponse`.

```ts
import axios from 'axios';
import { IFetchRandomQuotes, IQuoteResponse } from './interfaces';

type fetchRandomQuotesType = () => Promise<IQuote | Error>;

const fetchRandomQuotes: fetchRandomQuotesType = async () => {
  try {
    const response = await axios.get(
      'https://quote-garden.herokuapp.com/api/v3/quotes/random'
    );
    const quoteResponse: IQuoteResponse = response.data;
  } catch (error) {
    return error.message;
  }
};
```

4. Lakukan pemeriksaan apakah `quoteResponse` memiliki field `data` dan juga memiliki panjang array lebih dari 1.

```ts
import axios from 'axios';
import { IFetchRandomQuotes, IQuoteResponse } from './interfaces';

type fetchRandomQuotesType = () => Promise<IQuote | Error>;

const fetchRandomQuotes: fetchRandomQuotesType = async () => {
  try {
    const response = await axios.get(
      'https://quote-garden.herokuapp.com/api/v3/quotes/random'
    );
    const quoteResponse: IQuoteResponse = response.data;

    if (!quoteResponse.data || quoteResponse.data.length <= 0) {
      throw new Error('No quotes is available');
    }
  } catch (error) {
    return error.message;
  }
};
```

5. Return nilai quote melalui `quoteResponse.data[0]` karena response yang success seharusnya mengembalikan random quote dalam bentuk single element array.

hasil akhir dari file `fetchRandomQuotes.ts`:

```ts
import axios from 'axios';

import { IQuote, IQuoteResponse } from './interfaces';

type fetchRandomQuotesType = () => Promise<IQuote | Error>;

const fetchRandomQuotes: fetchRandomQuotesType = async () => {
  try {
    const response = await axios.get(
      'https://quote-garden.herokuapp.com/api/v3/quotes/random'
    );
    const quoteResponse: IQuoteResponse = response.data;

    if (!quoteResponse.data || quoteResponse.data.length <= 0) {
      throw new Error('No quotes is available');
    }

    return quoteResponse.data[0];
  } catch (error) {
    return error;
  }
};

export default fetchRandomQuotes;
```

Sekarang lakukan test dengan perintah `yarn test`. Jika berhasil maka akan menghasilkan output:

```
PASS  src/lib/QuoteService/__test__/fetchRandomQuotes.test.ts
  Fetch Random Quotes
    ✓ Should have fetched quote with correct type definition (2985 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.884 s, estimated 5 s
Ran all test suites related to changed files.
```

#### To Fullfill - When I select quote author, I can see a list of quotes from them.

Okey, untuk mendapatkan quotes dari penulis tertentu, kita akan menggunakan Endpoint get all quotes dengan parameter nama penulis.

Sebelum menulis function, jangan lupa tulis terlebih dahulu test cases nya sesuaikan dengan user story yang ada ya.

- Should throw error 'Author is not provided' when author is null or undefined.
- Should throw error when no quotes available from selected author'
- Should fetch quotes from provided selected author.

Tulis di file `fetchByAuthor.test.ts`

```js
import fetchByAuthor from '../fetchByAuthor';

describe('Fetch Quotes By Specific author', () => {
  it('should throw error when author is null or undefined', async () => {
    const result = await fetchByAuthor();
    if (!(result instanceof Error)) {
      throw new Error('Something unexpected happening');
    }

    expect(result instanceof Error).toBe(true);
    expect(result.message).toBe('Author is not selected');
  });

  it('should throw error when no quotes available from selected author', async () => {
    const result = await fetchByAuthor('LoremIpsum666');
    if (!(result instanceof Error)) {
      throw new Error('Something unexpected happening');
    }
    expect(result instanceof Error).toBe(true);
    expect(result.message).toBe("There's no quote from selected author");
  });

  it('Should fetch quotes from selected author', async () => {
    const selectedAuthor = 'Steve Jobs';

    const result = await fetchByAuthor(selectedAuthor);
    if (result instanceof Error) {
      throw new Error('Something unexpected happening');
    }

    expect(result.length > 0).toBe(true);
    expect(result[0].quoteAuthor).toBe(selectedAuthor);
  });
});
```

Sekarang saatnya membuat function untuk menyelesaikan user story ini.

1. Definisikan terlebih dahulu type dari function yang akan dibuat, _asynchronous function_ yang memiliki paramter `author` dan akan me-return _promise_ dengan value `Array<IQuote>` bila berhasil mendapatkan list of quotes dan `Error` bila terjadi kesalahan.

Tulis di file `fetchByAuthor.ts`

```ts
import { IQuoteRequestParams } from './interfaces';

type fetchByAuthorType = (
  author?: IQuoteRequestParams['author']
) => Promise<Array<IQuote> | Error>;

const fetchByAuthor: fetchByAuthorType = async author => {};
```

2. pastikan nilai dari parameter `author` tidak `null` ataupun `undefined`. Bila terjadi `null` atau `undefined` segera lakukan throw error dengan message `'Author is not selected'`.

```ts
import { IQuoteRequestParams } from './interfaces';

type fetchByAuthorType = (
  author?: IQuoteRequestParams['author']
) => Promise<Array<IQuote> | Error>;

const fetchByAuthor: fetchByAuthorType = async author => {
  try {
    if (!author) {
      throw new Error('Author is not selected');
    }
  } catch (error) {
    return error;
  }
};
```

3. Gunakan `axios.get()` Calling endpoint `'https://quote-garden.herokuapp.com/api/v3/quotes'` dengan parameter `author`.

```ts
import { IQuoteRequestParams } from './interfaces';

type fetchByAuthorType = (
  author?: IQuoteRequestParams['author']
) => Promise<Array<IQuote> | Error>;

const fetchByAuthor: fetchByAuthorType = async author => {
  try {
    if (!author) {
      throw new Error('Author is not selected');
    }

    const response = await axios.get(
      'https://quote-garden.herokuapp.com/api/v3/quotes',
      {
        params: {
          author,
        },
      }
    );
  } catch (error) {
    return error;
  }
};
```

4. lakukan check pada response dan apabila field `data` kosong, throw error dengan message `"There's no quote from selected author"`. Jika terdapat quotes maka return list of quotes.

Hasil akhir dari file `fetchByAuthor.ts`:

```ts
import axios from 'axios';
import { IQuote, IQuoteRequestParams, IQuoteResponse } from './interfaces';

type fetchByAuthorType = (
  author?: IQuoteRequestParams['author']
) => Promise<Array<IQuote> | Error>;

const fetchByAuthor: fetchByAuthorType = async author => {
  try {
    if (!author) {
      throw new Error('Author is not selected');
    }

    const response = await axios.get(
      'https://quote-garden.herokuapp.com/api/v3/quotes',
      {
        params: {
          author,
        },
      }
    );

    const quoteResponse: IQuoteResponse = response.data;

    if (!quoteResponse.data || quoteResponse.data.length <= 0) {
      throw new Error("There's no quote from selected author");
    }

    return quoteResponse.data;
  } catch (error) {
    return error;
  }
};

export default fetchByAuthor;
```

Run test, check apakah test berhasil, jika berhasil maka akan tampil output seperti dibawah:

```
 PASS  src/lib/QuoteService/__test__/fetchByAuthor.test.ts
  Fetch Quotes By Specific author
    ✓ should throw error when author is null or undefined (1 ms)
    ✓ should throw error when no quotes available from selected author (1510 ms)
    ✓ Should fetch quotes from selected author (402 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.564 s, estimated 4 s
Ran all test suites related to changed files.
```

Untuk handling API [Quote Garden API](https://pprathameshmore.github.io/QuoteGarden/) sudah selesai, akan dilanjutkan dengan pembuatan view aplikasi.

Keep in touch for the updates ya!
Cheers 🥂,
