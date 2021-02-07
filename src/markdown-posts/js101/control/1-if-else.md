---
title: Statement If-Else di javascript
date: 2021-02-6
description: Atur alur program dengan percabangan if-else
heroImage: https://images.unsplash.com/photo-1547643547-c0738bcf65cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
photographer: Marcel Strauß
unsplashAccount: martzzl
series: js101
seasonTitle: control
season: 4
episode: 1
isPublished: true
---
### Definisi

Percabangan `if-else` digunakan untuk mengatur jalannya program dengan suatu kondisi. Kondisi yang diberikan haruslah sebuah ekspersi yang menghasilkan nilai `boolean`. 

Bentuk penulisannya seperti berikut:

```js
  if (conditions) {
    // statements yang akan dijalankan ketika nilai condition adalah true
  } else {
    // statements yang akan dijalankan ketika nilai condition adalah false
  }
```

atau dapat juga ditulis seperti dibawah ini, jika hanya mau menjalankan suatu statement jika suatu kondisi bernilai true:

```js
  if (conditions) {
    // statements yang akan dijalankan ketika nilai condition adalah true
  }
```
catatan:
 - Pada contoh penulisan diatas `condition` berupa statement yang akan menghasilkan nilai `boolean` ([apa tu nilai boolean? bisa check link ini](/js101/introduction/2-data-types/)). 
 - Lebih mudahnya, anggap saja `if-else` sebagai `jika-maka` agar lebih mudah dipahami.

### Kasus
Agar lebih paham, mari solve kasus berikut:

> Menjelang hari Valentine, distro milik Kenzo ingin meminta fitur diskon dengan syarat bila customernya berbelanja minimal Rp.100,000 (seratus ribu rupiah), maka akan diberikan diskon sebesar 14% dengan max diskon Rp.24,000 (dua puluh empat ribu rupiah).

Hasil ekstrak informasi dari request Kenzo:
- Syarat diskon adalah total belanja customer minimal Rp.100,000.
- Diskon yang akan diberikan sebesar 14% dari total belanja, dengan maksimal diskon adalah Rp.24,000.

### Solusi

Buat `function` dengan parameter `shoppingAmount` sebagai nilai dari total belanja.

```js
  function countValentineDiscount(shoppingAmount) {
    // todo: kerja
  }
```

Sebelum lanjut membuat perhitungan diskon, agar lebih mudah dimengerti, mari definisikan beberapa konstanta berikut:
```js
  function countValentineDiscount(shoppingAmount) {
    const MAX_DISCOUNT_AMOUNT = 24000; // diskon maksimal
    const MIN_SHOPPING_AMOUNT = 100000; // minimal total belanja
    const DISCOUNT_VALUE_IN_PERCENT = 0.14; // nilai diskon dalam persen
  }
```
ketiga konstanta diatas memudahkan dalam penulisan kode. Jadi tidak ditulis dengan nilai nya saja, nanti _teammate_ you bingung kalo angka saja.

Lanjutkan dengan penentuan kondisi, kondisi diskon adalah ketika:
> total belanja customer minimal Rp.100,000

Jadi bisa ditulis seperti berikut:
```js
  function countValentineDiscount(shoppingAmount) {
    // definisikan konstanta
    const MAX_DISCOUNT_AMOUNT = 24000; // diskon maksimal
    const MIN_SHOPPING_AMOUNT = 100000; // minimal total belanja
    const DISCOUNT_VALUE_IN_PERCENT = 0.14; // nilai diskon dalam persen

    // check kondisi
    if (shoppingAmount >= MIN_SHOPPING_AMOUNT) {
      // todo: hitung jumlah diskon
    } else {
      // nothing happens yes
      return 0;
    }
  }
```

cara bacanya mudah, cukup translate menjadi:
> jika nilai shoppingAmount lebih dari sama dengan `MIN_SHOPPING_AMOUNT` maka akan hitung jumlah diskon. Jika tidak, return nilai 0.

Dikarenakan `countValentineDiscount` akan me-return nilai `0` ketika kondisi yang dihasilkan `false`, maka code dapat diubah menjadi berikut:

```js
  function countValentineDiscount(shoppingAmount) {
    // definisikan konstanta
    const MAX_DISCOUNT_AMOUNT = 24000; // diskon maksimal
    const MIN_SHOPPING_AMOUNT = 100000; // minimal total belanja
    const DISCOUNT_VALUE_IN_PERCENT = 0.14; // nilai diskon dalam persen

    // check kondisi
    if (shoppingAmount < MIN_SHOPPING_AMOUNT) {
      return 0;
    }
    // todo: hitung jumlah diskon
  }
```

Perubahan terjadi pada kondisi
```js
  if (shoppingAmount >= MIN_SHOPPING_AMOUNT) {
    // todo: hitung jumlah diskon
  } else {
    // nothing happens yes
    return 0;
  }
```

Menjadi seperti dibawah ini:
```js
  if (shoppingAmount < MIN_SHOPPING_AMOUNT) {
    return 0;
  }
  // todo: hitung jumlah diskon
```

Tujuannya agar mengurangi adanya _nested-if_ statement yang akan menjadikan code lebih sulit untuk dibaca.

Lanjutkan dengan menghitung jumlah diskon, karena diskon yang direquest adalah `14%` dari `shoppingAmount`, maka kalikan `shoppingAmount` dengan konstanta `DISCOUNT_VALUE_IN_PERCENT`. Sehingga code akan menjadi seperti dibawah ini:
```js
  function countValentineDiscount(shoppingAmount) {
    // definisikan konstanta
    const MAX_DISCOUNT_AMOUNT = 24000; // diskon maksimal
    const MIN_SHOPPING_AMOUNT = 100000; // minimal total belanja
    const DISCOUNT_VALUE_IN_PERCENT = 0.14; // nilai diskon dalam persen

    // check kondisi
    if (shoppingAmount < MIN_SHOPPING_AMOUNT) {
      return 0;
    }
    // todo: hitung jumlah diskon
    const discountAmount = shoppingAmount * DISCOUNT_VALUE_IN_PERCENT;
  }
```

Oiya ada juga syarat perhitungan diskon, yaitu maksimal diskon yang diberikan adalah `Rp.24,000` atau sudah didefinisikan dengan konstanta `MAX_DISCOUNT_AMOUNT`, sehingga perlu ditambahkan kondisi jika melebihi `MAX_DISCOUNT_AMOUNT`, maka kembalikan nilai `MAX_DISCOUNT_AMOUNT`. Terakhir, dikarenakan nilai diskon yang diinginkan adalah integer, maka dikalukan konversi dari nilai variable `discountAmount` ke integer.

```js
  const discountAmount = shoppingAmount * DISCOUNT_VALUE_IN_PERCENT;

  if (discountAmount > MAX_DISCOUNT_AMOUNT) {
    return MAX_DISCOUNT_AMOUNT;
  }

  return parseInt(discountAmount, 10);
```

jika ditulis lengkap, akan menjadi seperti ini:

```js
  function countValentineDiscount(shoppingAmount) {
    const MAX_DISCOUNT_AMOUNT = 24000;
    const MIN_SHOPPING_AMOUNT = 100000;
    const DISCOUNT_VALUE_IN_PERCENT = 0.14;

    if (shoppingAmount < MIN_SHOPPING_AMOUNT) {
      return 0;
    }

    const discountAmount = shoppingAmount * DISCOUNT_VALUE_IN_PERCENT;
    
    if (discountAmount > MAX_DISCOUNT_AMOUNT) {
      return MAX_DISCOUNT_AMOUNT;
    }

    return parseInt(discountAmount, 10);
  }
```
### Test
untuk memastikan code berjalan dengan benar, mari kita lakukan unit test dengan test-cases sebagai berikut:
  - Jika belanja Rp.25,000, nilai diskon adalah Rp.0
  - Jika belanja Rp.100,000, nilai diskon adalah Rp.14,000
  - Jika belanja Rp.200,000, nilai diskon adalah Rp.24,000

```js
  test('Jika belanja Rp.25,000, nilai diskon adalah Rp.0', () => {
    expect(countValentineDiscount(25000)).toBe(0);
  });

  test('Jika belanja Rp.100,000, nilai diskon adalah Rp.14,000', () => {
    expect(countValentineDiscount(100000)).toBe(14000);
  });

  test('Jika belanja Rp.200,000, nilai diskon adalah Rp.24,000', () => {
    expect(countValentineDiscount(200000)).toBe(24000);
  });
```
catatan:
 - untuk keperluan testing, saya menggunakan REPL di [repl.it](https://repl.it/@hendrasadewa/jest-playground) dengan runner jest.


ketika test cases diatas di run, menghasilkan output yang menyatakan lolos tests:
```txt
  PASS  ./sum.test.js (8.304s)
    ✓ Jika belanja Rp.25,000, nilai diskon adalah Rp.0 (15ms)
    ✓ Jika belanja Rp.100,000, nilai diskon adalah Rp.14,000
    ✓ Jika belanja Rp.200,000, nilai diskon adalah Rp.24,000 (1ms)

  Test Suites: 1 passed, 1 total
  Tests:       3 passed, 3 total
  Snapshots:   0 total
  Time:        15.892s
  Ran all test suites.
```

Ok untuk pembahasan percabangan `if-else` sampai disini dulu. Semoga membantu dan mencerahkan. thanks for your time and 🥂Cheers!