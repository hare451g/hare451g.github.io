---
title: Random Quote Generator - 4
date: 2021-02-10
description: Solusi dari tantangan devchallenges.io - random quote generator bagian Quote Components
heroImage: https://images.unsplash.com/photo-1511465390398-532913e8328d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80
photographer: Mert Talay
unsplashAccount: merttly
series: journal
seasonTitle: front-end
season: 1
episode: 4
isPublished: true
---

# Quote components

Component ini digunakan untuk menampilkan `quoteText`, terdapat tiga kondisi tampilan, yaitu:

- ketika `quoteText` bernilai `null` akan muncul pernyataan bahwa quote kosong, tampilan loading akan dihilangkan.
- ketika `loading` bernilai true, maka akan muncul tampilan loading, tampilan quote akan dihilangkan.
- ketika `quoteText` bernilai teks dari API, akan menampilkan isi dari teks, tampilan loading akan dihilangkan.

## Folder structure

Buatlah file dan folder seperti berikut:

```
src/
  components/
    Quote/
      __test__/
        index.test.ts
      constants.ts
      index.tsx
      styles.css
```

Keterangan:

- `Quote/__test__/index.test.ts` file unit test.
- `Quote/constants.ts` adalah file yang berisikan definisi konstanta.
- `Quote/index.tsx` adalah file component jsx.
- `Quote/styles.css` adalah file css yang berisikan definisi style yang akan dipakai dalam component.

## Constants

Untuk memudahkan, teks untuk beberapa kondisi diatas akan didefinisikan sebagai konstanta di file `constants.ts`.

```ts
const constants = {
  messages: {
    IS_EMPTY: 'Received empty quote, please generate new one',
    IS_LOADING: 'Loading quotes . . .',
  },
};

export default constants;
```

## Styles

### Menambahkan Font dari Google Fonts

Untuk menambahkan font dari google fonts, silahkan buka laman web [Google Fonts](https://fonts.google.com/), kemudian pilihlah font yang disukai (saat ini saya memilih [Raleway](https://fonts.google.com/specimen/Raleway?query=+raleway)).

Pilih _Font Weights_ yang diinginkan, kemudian copy code yang ada pada _use on web_.

Saya memilih _font weights_ 400, 500, dan 700 beserta dengan varian _italics_.
Kira-kira code yang digenerate akan tampil seperti dibawah ini:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
  rel="stylesheet"
/>
```

Kemudian buka file index.html di `public/index.html`, tempelkan pada bagian `<head>`.

tampilan file `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#f3f3f3" />
    <meta
      name="description"
      content="Random quote generator from famous people"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
    <title>Random Quote Generator</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### Menulis file css

Kemudian definisikan styles untuk component di file `styles.css`:

```css
.quote-content {
  border-left: solid 4px #f7df94;
  padding-left: 24px;
  font-family: sans-serif;
}

.quote-empty {
  font-family: monospace;
}
```

## Test

Untuk memastikan komponen akan tampil dengan sesuai kondisi, maka mari buat test file di `__test__/index.test.ts` yang berisikan code sebagai berikut:

```js
import { render, screen } from '@testing-library/react';

import constants from '../constants';
import Quote from '..';

describe('Quote component test cases', () => {
  it(`Should render empty quote message when quote is null or undefined`, () => {
    render(<Quote />);

    const content = screen.queryByTestId('content');

    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('quote-empty');
    expect(content).toHaveTextContent(constants.messages.IS_EMPTY);

    expect(screen.queryByTestId('loading-indicator')).toBeNull();
  });

  it(`Should render loading messages when loading quote`, () => {
    render(<Quote loading />);
    expect(screen.queryByTestId('content')).toBeNull();
    expect(screen.getByTestId('loading-indicator')).toHaveTextContent(
      constants.messages.IS_LOADING
    );
  });

  it(`Should render text from props`, () => {
    const quoteText = 'lorem ipsum dolor sit amet';
    render(<Quote text={quoteText} />);

    const content = screen.queryByTestId('content');

    expect(content).toHaveTextContent(quoteText);
    expect(content).toHaveClass('quote-content');
    expect(screen.queryByTestId('loading-indicator')).toBeNull();
  });
});
```

## Component

Quote component memiliki props:

- `text` digunakan untuk passing `quoteText` ke dalam component dalam bentuk _string_.
- `loading` digunakan untuk flag `loading` saat fetching data dengan tipe _boolean_.

Sehingga dapat didefinisikan:

```ts
type propTypes = {
  text?: string;
  loading?: boolean;
};
```

Jangan lupa import `styles.css` agar styles dapat digunakan pada component `Quote`.

```ts
import './styles.css';

type propTypes = {
  text?: string;
  loading?: boolean;
};
```

Kemudian definisikan _Function Component_ dengan nama `Quote` seperti berikut:

```ts
import './styles.css';

type propTypes = {
  text?: string;
  loading?: boolean;
};

const Quote: React.FC<propTypes> = ({ text = null, loading = false}) => ();
```

Untuk menyelesaikan test case _it Should render loading messages when loading quote_. Berikan pemeriksaan kondisi jika _props_ `loading` adalah `true`, maka tampilkan teks `IS_LOADING` dari file `constants.ts`.

```tsx
import './constants.ts';
import './styles.css';

type propTypes = {
  text?: string;
  loading?: boolean;
};

const Quote: React.FC<propTypes> = ({ text = null, loading = false }) => {
  if (loading) {
    return (
      <p data-testid="loading-indicator">{constants.messages.IS_LOADING}</p>
    );
  }
};
```

Kemudian untuk menampilkan quote, buatlah `<blockquote>` seperti ini:

```tsx
import constants from './constants';
import './styles.css';

type propTypes = {
  text?: string;
  loading?: boolean;
};

const Quote: React.FC<propTypes> = ({ text = null, loading = false }) => {
  if (loading) {
    return (
      <p data-testid="loading-indicator">{constants.messages.IS_LOADING}</p>
    );
  }

  return (
    <blockquote className="quote-content" data-testid="content">
      "{text}"
    </blockquote>
  );
};

export default Quote;
```

Jangan lupa, ketika quote bernilai `null` atau _empty string_ (`''`) harus menampilkan message dan styles yang sesuai. Sehingga code componentnya seperti ini:

```tsx
import constants from './constants';
import './styles.css';

type propTypes = {
  text?: string;
  loading?: boolean;
};

const Quote: React.FC<propTypes> = ({ text = null, loading = false }) => {
  if (loading) {
    return (
      <p data-testid="loading-indicator">{constants.messages.IS_LOADING}</p>
    );
  }

  const contentClassName = !text ? 'quote-empty' : 'quote-content';
  const contentText = text || constants.messages.IS_EMPTY;

  return (
    <blockquote className={contentClassName} data-testid="content">
      "{contentText}"
    </blockquote>
  );
};

export default Quote;
```

jika dirasa selesai, maka ketika running test, akan menampilkan hasil seperti ini:

```
 PASS  src/components/Quote/__test__/index.test.tsx
  Quote component test cases
    ✓ Should render empty quote message when quote is null or undefined (52 ms)
    ✓ Should render Loading quotes . . . when loading quote (6 ms)
    ✓ Should render text from props (5 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.084 s
Ran all test suites related to changed files.
```

Untuk Pembahasan Quote components selesai sampai sini, jika ada pertanyaan bisa ditanyakan di twitter [@sadevva\_](https://twitter.com/sadevva_)

Keep in touch for the updates ya!
Cheers 🥂,
