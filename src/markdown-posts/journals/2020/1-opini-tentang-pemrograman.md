---
title: Bahas core dari pemrograman dengan studi Kasus
date: 2020-03-29
description: Untuk yang ingin memahami pemrograman, tapi bingung mulai dari mana
heroImage: https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80
photographer: Ian Schneider
unsplashAccount: goian
series: journal
seasonTitle: Year - 2020
season: 2020
episode: 1
isPublished: true
---

Hello,

Sedang kepikiran, apa bisa gue mengajari core dari pemrograman dengan javasript hanya dari satu buah kasus?

Karena beberapa waktu lalu, gue menemukan ada fulan bin fulan di salah satu group FB Pemrograman bilang kalo dia sangat passionate terhadap pemrograman, tapi ngga ngerti harus mulai dari mana. DUDE I FEEL YOU!

Sedikit cerita aja, Gue juga pernah mengalami hal yang sama waktu SMA. Gara-gara film [Hackers(1995)](https://www.imdb.com/title/tt0113243/), gue jadi tergila-gila sama yang namanya programming, sampai nabung uang jajan demi beli buku pemrograman dengan c yang ada embel-embel hacking nya hahaha, dan sempat pula nyobain install ubuntu di notebook, compile pake gcc, sampai bikin hello world yang rasanya seneng banget. Tapi karena nugas jaman SMA gue mayoritas perlu banget ms office, dan buku yang gue beli isinya terlalu teknis sampai gue ngga ngerti sama sekali sampe gue merasa tak ada arah lagi untuk belajar programming, jadi mau ngga mau berhenti belajar programming dan balik lagi ke menjalani hidup seperti biasanya.

Oke, balik ke topik awal, menurut gue untuk memahami pemrograman, kita tuh (HAH~~~~! KITA!?) harus terjun langsung menyelesaikan kasus, dan minimal punya 'wadah' untuk bertanya.

Sepengalaman gue ngajar di Lab. TI kampus gue, mahasiswa rata-rata ngga ngerti kalo dia dikasih 'codingan' terus dia ketik di code editornya, lalu dia jalanin, setelah dia jalanin si pengajar yang seharusnya jadi pendamping malah hanya membaca penjelasan dari codingan yang telah di share. Hasilnya, hampir seluruh masiswa yang ikut kelas tersebut ngga ngerti dengan apa yang mereka lakukan.

Beda dengan mahasiswa yang diajari untuk memecahkan kasus dengan menggunakan algoritma dan pemrograman, **walaupun sering lupa syntax atau cara menulis programnya, mereka mengerti apa yang mereka harus lakukan**. Cara mengajarinya pun tidak sembarangan, lakukan step-by-step, mulai dari memahami permasalahan yang diberikan, mengumpulkan informasi dan mengelompokan masalah yang didapat dari pemahaman permasalahannya, dan membuat alur untuk memecahkan kasus yang diberikan.

Yang perlu gue tekankan, adalah syntax itu tidak perlu dihafal kok, bagi gue waktu untuk membuat program itu habis 70% mikir, 10% coding, 10% testing, 10% refactoring. Masalah syntax bisa 'nyontek' di dokumentasi official bahasa pemrogramannya, tutorials point, dll. Yang penting adalah mulai bisa solving problem.

Nah, mari kita coba belajar dari problem solving suatu kasus.

# Case Study: Rata - rata

Diberikan nilai tugas matematika yang telah diperaih oleh seorang siswa,dalam waktu satu semester dalam bentuk array sebagai berikut:

```
  Nilai Tugas matematika Fulan bin Fulan

  nilai tugas - 1 : 45
  nilai tugas - 2 : 65
  nilai tugas - 3 : 50
  nilai tugas - 4 : 50
  nilai tugas - 5 : 65
  nilai tugas - 6 : 75
  nilai tugas - 7 : 90
  nilai tugas - 8 : 50
```

Tolong buat program yang dapat menentukan apakah siswa ini lolos berhak untuk lulu atau tidak dengan kriteria: `rerata harus diatas 65`.

## Hasil Analisis Kasus

Dari kasus yang diberikan, kita dapat informasi:

- Nilai siswa berupa kumpulan angka (numeric data).
- User ingin tahu apakah siswa ini lolos KKM atau tidak
- Kriteria KKM adalah jika rata rata dari nilai siswa harus lebih dari 65.

## Penyelesaian:

### 1. Menyimpan Nilai Siswa

Untuk menyimpan data yang ada diberikan, kita dapat menyimpan kumpulan nilai tersebut dalam variabel. Jenis variabel yang dipakai adalah `const` atau konstan, karena tak ada lagi perubahan data diperlukan dalam penyelesaian kasus ini.

Dikarenakan nilai yang diberikan oleh user adalah kumpulan nilai siswa dalam bentuk angka atau numerik dan tak tercampur dengan teks atau tipe data lain kita dapat menyimpannya kedalam `array`.

`Array` adalah tipe data yang dapat menyimpan kumpulan dari data, dan data ini dicocokan dengan index array untuk memudahkan program mengakses nilainya. Mudahnya, anggaplah array ini sebagai suatu tabel yang memiliki baris dan dua kolom. Kolom pertama adalah index dari array dimulai dari nol (0), dan kolom kedua adalah nilai mahasiswa yang disimpan dalam array.

Bisa dibayangkan menjadi bentuk tabel seperti ini:

Nama tabel: **NILAI_SISWA**

| index | nilai |
| ----- | ----- |
| 0     | 45    |
| 1     | 65    |
| 2     | 50    |
| 3     | 50    |
| 4     | 65    |
| 5     | 75    |
| 6     | 90    |
| 7     | 50    |

Dalam bahasa pemrograman, array diatas biasanya di tulis seperti ini:

contoh dalam javascript

```javascript
const NILAI_SISWA = [45, 65, 50, 50, 65, 75, 90, 50];
```

contoh dalam php

```php
$NILAI_SISWA = array(45, 65, 50, 50, 65, 75, 90, 50);
```

contoh dalam Java

```java
int NILAI_SISWA[] = {45, 65, 50, 50, 65, 75, 90, 50};
```

\* notes: untuk contoh selanjutanya gue akan bikin contoh menggunakan javascript.

Untuk menggunakan data yang berada didalam array, kita dapat menggunakan index-nya. Misal ingin mengambil nilai `90`, maka kita butuh memanggil variabel array dengan indexnya.

Bisa ditulis seperti ini:

```js
NILAI_SISWA[6]; // akan menghasilkan 90
```

Jika dilihat dari tabel tadi nilai `90` memiliki index `6`.

| index | nilai |
| ----- | ----- |
| 6     | 90    |

Oke, setelah paham manfaat dan cara menyimpan data dalam bentuk array, sepakat ya kita akan menyimpan nilai mahasiswa dalam bentuk array, Seperti ini:

```javascript
const NILAI_SISWA = [45, 65, 50, 50, 65, 75, 90, 50];
```

### 2. Menghitung Rata-rata

Sebelum menghitung rata-rata dari nilai siswa, kita harus tau dulu jumlah dari nilai yang diberikan, dan juga total dari nilai siswa, karena rumus dari rata-rata adalah:

```
          total akumulasi nilai siswa
rerata =  ---------------------------
                jumlah nilai
```

dari sini timbulah masalah kecil:

- Menghitung jumlah dari nilai
- Menghitung total nilai siswa

#### 2.1 Menghitung jumlah dari nilai

Jumlah dari nilai yang diberikan adalah 8, atau sama dengan panjang dari array `NILAI_SISWA` yaitu 8 baris (index dari 0 sampai dengan 7);

Untuk menghitung jumlah nilai dari nilai siswa yang diberikan ada dua cara, yaitu mendefinisikan nilai langsung dari total nilai yang diberikan, atau menggunakan perintah atau attribut bawaan dari bahasa pemrograman seperti `.length` di java dan javascript, atau fungsi `count()` di php.

Untuk lebih amannya kita akan menggunakan `.length` dari javascript, karena jika kita definisikan dari jumlah nilai siswa, maka nilai dari total data adalah fixed, dan program kita tak bisa digunakan bila ada input selanjutnya yang memiliki jumlah data lebih atau kurang dari 8.

oke, kita update program kita dengan menambahkan code berikut:

```javascript
const NILAI_SISWA = [45, 65, 50, 50, 65, 75, 90, 50];
const jumlahNilai = NILAI_SISWA.length;
```

\* ingat, dalam menulis nama variabel usahakan sesuai dengan data yang disimpan, sehingga memudahkan kita dan orang lain yang mengolah programmnya.

#### 2.2 Menghitung total nilai siswa

Untuk menghitung total dari nilai kita dapat menjumlahkan nilai dari index 0 sampai dengan index akhir. Dalam situasi ini, kita akan mengulang operasi penjumlahan sebanyak 8 kali atau sesuai dengan nilai `jumlahNilai` untuk menghitung akumulasi dari nilai siswa.

Intinya sih: `nilai sebelumnya + nilai sekarang`.

Gimana? Mulai sulit? Tenang aja, bahasa pemrograman umumnya memiliki fitur untuk mengulangi suatu operasi hingga kondisi tertentu, atau biasa disebut dengan perulangan atau looping.

Untuk membuat looping, kita terlebih dahulu harus tahu:

- operasi apa yang akan diulang?
- kapan looping harus berhenti?

Mari kita jawab dua pertanyaan tersebut:

operasi apa yang akan diulang?
yang akan diulang adalah operasi penjumlahan:

```
  nilai sebelumnya + nilai sekarang
```

kapan looping harus berhenti?
looping harus berhenti ketika seluruh nilai telah dijumlahkan, total dari nilai yang ada adalah `8` atau panjang dari array `NILAI_SISWA` yang telah disimpan dalam variabel `jumlahNilai`.

looping yang akan digunakan adalah looping dengan bentuk `for` seperti ini:

```js
for(A; B; C ) {
  operasi yang akan diulang
}
```

keterangan:
A => kondisi awal atau nilai awal yang akan di iterasi.
B => kondisi henti.
C => apa yang dilakukan setelah opeasi dalam looping selesai.

Mari kita bangun beberapa hal yang diperlukan dalam kondisi for:

A => kondisi awal atau nilai awal yang akan di iterasi.:
Karena untuk mengakses nilai array kita harus mengetahui index dari arraynya, kita akan menggunakan bilangan 0 sampai dengan 7 karena panjang dari array NILAI_SISWA adalah 8 buah, atau dari 0 -> 7 (8 buah elemen). Mari kita namakan dengan `index`.

maka isi dari kondisi awal adalah:

```js
let index = 0;
```

untuk mengakses nilai dalam array `NILAI_SISWA` kita gunakan perintah berikut:

```js
NILAI_SISWA[index];
```

B => Kondisi henti:
Supaya looping tak melebihi dari panjang variabel `NILAI_SISWA` maka, kita buat kondisi dimana index hanya boleh sampai dengan 7, jika sampai 8 akan berhenti, atau ditulis dalam bahasa pemrograman javascript, seperti ini:

```js
index >= jumlahNilai;
```

C => Apa yang dilakukan setelah opeasi dalam looping selesai.
di bagian ini kita akan mengubah nilai variabel `index` dengan menambahkan `+1` setiap perulangan terjadi, sehingga ketika operasi pemjumlahan selesai nilai `index` akan berubah dengan `index = index + 1`.

untuk mudahnya kita dapat menulis seperti ini:

```js
i++;
```

Operasi yang akan diulang:
seperti sebelumnya operasi yang akan diulang adalah `nilai sebelumnya + nilai sekarang`, nah karena nilai sebelumnya ada kemungkinan belum di definisikan mari kita definisikan terlebih dahulu dengan nama variabel `akumulasi` dan nilai nya bernilai `0` (nol).

```js
let akumulasi = 0;
```

setelah di definisikan, operasi dalam perulangan akan berisikan

```js
akumulasi = akumulasi + NILAI_SISWA[index];
```

Sudah lengkap semua, tinggal kita implementasikan seperti ini:

```js
const NILAI_SISWA = [45, 65, 50, 50, 65, 75, 90, 50];
const jumlahNilai = NILAI_SISWA.length;

let akumulasi = 0;

for (let index = 0; index >= jumlahNilai; index++) {
  akumulasi = akumulasi + NILAI_SISWA[index];
}
```

Program diatas tidak perlu dirunning, cukup kita bayangkan sahaja jalannya seperti ini

| perulangan ke- | index | nilai siswa | akumulasi      |
| -------------- | ----- | ----------- | -------------- |
| 1              | 0     | 45          | 0 + 45 = 45    |
| 2              | 1     | 65          | 45 + 65 =110   |
| 3              | 2     | 50          | 110 + 50 = 160 |
| 4              | 3     | 50          | 160+50 = 210   |
| 5              | 4     | 65          | 210 + 65 = 275 |
| 6              | 5     | 75          | 275 + 75 = 350 |
| 7              | 6     | 90          | 350 + 90 = 440 |
| 8              | 7     | 50          | 440 + 50 = 490 |

nilai yang akumulasi yang didapat adalah 490 !

### 2.3 Menghitung rata-rata

Kita sudah dapat `jumlahNilai` dan juga sudah mendapatkan `akumulasi` sisanya adalah tinggal menghitung nilai rata-rata saja, mari kita gunakan operator pembagi `/` (bila di javascript).

```js
const nilaiRerata = akumulasi / jumlahNilai;
```

jika digabungkan akan menjadi seperti ini:

```js
const NILAI_SISWA = [45, 65, 50, 50, 65, 75, 90, 50];
const jumlahNilai = NILAI_SISWA.length;

let akumulasi = 0;

for (let index = 0; index >= jumlahNilai; index++) {
  akumulasi = akumulasi + NILAI_SISWA[index];
}

const nilaiRerata = akumulasi / jumlahNilai;
```

hasil dari perhitungan tersebut akan bernilai `490 / 8` yaitu `61.25`.

# 3 Menentukan apakah lulus atau tidak

Untuk menentukan siswa lulus atau tidak, kita memerlukan komparasi atau perbandingan antara, nilai rata rata yang didapat dan nilai kkm, gimana tuch~?

kita gunakan operator pembanding lebih besar dari atau sama dengan (>=). Tapi sebelumnya, kita definisikan dulu nih nilai KKM nya yaitu 65.

```js
const NILAI_KKM = 65;
const isLulus = nilaiRerata >= NILAI_KKM;
```

mari kita gabungkan program kita sampai saat ini:

```js
const NILAI_SISWA = [45, 65, 50, 50, 65, 75, 90, 50];
const NILAI_KKM = 65;

const jumlahNilai = NILAI_SISWA.length;

let akumulasi = 0;

for (let index = 0; index >= jumlahNilai; index++) {
  akumulasi = akumulasi + NILAI_SISWA[index];
}

const nilaiRerata = akumulasi / jumlahNilai;

const isLulus = nilaiRerata >= NILAI_KKM;
```

lanjut, untuk menyatakan dia lulus atau tidak, mari gunakan percabangan atau yang dikenal dengan branching. Percabangan yang umum dalam bahasa pemrograman adalah percabangan `if-else`. Percabangan `if-else` akan memeriksa kondisi kemudian menentukan statement atau perintah mana yang akan dijalankan.

Coba lihat kode dibawah ini:

```js
if (kondisi) {
  jika kondisi benar / true
} else {
  jika kondisi salah / false
}
```

tujuan kita adalah mencetak apakah siswa dengan nilai yang diberikan tadi lulus atau tidak, dengan kondisi dimana nilai rata rata harus melebihi atau sama dengan nilai KKM, oleh karena itu kita gunakan kondisi yang telah didefinisikan sebelumnya sebagai kondisi `if`.

implementasinya seperti ini:

```js
const NILAI_KKM = 65;
const isLulus = nilaiRerata >= NILAI_KKM;

if (isLulus) {
  kalo dia lulus
} else {
  kalo ngga lulus
}
```

terakhir kita akan mencetak `selamat anda lulus` jika lulus, dan `mohon maaf anda tidak lulus, karena nilai anda belum mencukupi kkm`. Beragam cara mencetak teks dalam bahasa pemrograman, dalam javascript kita gunakan `console.log(teks yang akan dicetak)`.

Kuy, kita implementasikan:

```js
const NILAI_KKM = 65;
const isLulus = nilaiRerata >= NILAI_KKM;

if (isLulus) {
  console.log(`selamat anda lulus`);
} else {
  console.log(
    `mohon maaf anda tidak lulus, karena nilai anda belum mencukupi kkm`
  );
}
```

nah, kita bayangkan bila nilai rerata adalah 61.25, maka dia akan dinyatakan tidak lulus dan program akan mencetak: `mohon maaf anda tidak lulus, karena nilai anda belum mencukupi kkm`.

okey kita gabungin potongan program kita:

```js
const NILAI_SISWA = [45, 65, 50, 50, 65, 75, 90, 50];
const NILAI_KKM = 65;

const jumlahNilai = NILAI_SISWA.length;

let akumulasi = 0;

for (let index = 0; index >= jumlahNilai; index++) {
  akumulasi = akumulasi + NILAI_SISWA[index];
}

const nilaiRerata = akumulasi / jumlahNilai;

const isLulus = nilaiRerata >= NILAI_KKM;

if (isLulus) {
  console.log(`selamat anda lulus`);
} else {
  console.log(
    `mohon maaf anda tidak lulus, karena nilai anda belum mencukupi kkm`
  );
}
```

## konklusi

nah, selamat jika kalian ngikuti dan memahami proses problem solving kasus diatas menggunakan pemrograman. Kalian sudah mengerti dasar dari hampir seluruh bahasa pemrograman!

kalian sudah bisa:

- mendefinisikan variabel, dan konstanta,
- mendefinisikan dan menggunakan variabel array
- melakukan operasi aritmatika
- melakukan operasi pembanding
- melakukan operasi perbandingan / komparasi data sehingga dapat menjadi kondisi pembanding dalam percabangan dan perulangan
- melakukan perulangan dengan untuk mengolah data dalam bentuk array
- mencetak teks
- memanfaatkan nilai sementara untuk menyimpan nilai akumulasi

dari pengalaman gue sendiri yang telah mencicipi bahasa:

- c
- c++
- c#
- COBOL
- FORTRAN
- java
- javascript (es6+ / typescript)
- php
- python
- ruby
- pascal
- vb
- assembler

Untuk menulis program semua konsepnya sama, namun yang jadi pembeda adalah cara penulisan (syntax), dan fungsinya, misal untuk mengolah big data dan perhitungan yang membutuhkan processing unit yang besar dapat menggunakan python, untuk membuat web dapat menggunakan javascript atau php atau pula java, masing - masing bahasa sudah punya spesialisasinya tapi tidak menutup kemungkinan untuk melakukan hal diluar spesialisasi bahasa tersebut, tinggal dicheck di dokumentasi masing-masing bahasa.

Oleh karena itu gue tekankan lagi untuk belajar pemrograman yang perlu diasah adalah pemahaman algoritma dan cara berpikir untuk menganalisis masalah, menggali informasi, memanfaatkan informasi menjadi data yang akan diolah, dan kemampuan untuk menyelesaikan masalah. Masalah coding tinggal disesuaikan dengan kebutuhan saja.

Percuma afal syntax bisa ngoding (ngetik) tapi ngga paham.

mohon maaf agak kasar, tapi ya sudala ya hahaha emosi dengan keadaan pendidikan sekarang~
