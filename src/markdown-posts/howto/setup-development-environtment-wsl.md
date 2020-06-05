---
title: Setup Development Environment di WSL
date: 2020-06-05
description: Pindah ke Windows, tapi biasa pake ubuntu? Coba baca ini deh biar bisa running ubuntu di Windows tanpa VM atau docker.
heroImage: https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80
photographer: Anete Lūsiņa
unsplashAccount: anete_lusina
series: howto
seasonTitle: OS
season: 1
episode: 3
isPublished: true
---

Minggu ini gue belajar hal baru, hal diluar kebiasaan gue, ya sekarang gue sedang menggunakan Windows 10 sebagai daily driver gue.

## Windows 10?

Gue sudah menggunakan Linux sejak jaman gue kuliah, (with serious distro-hopping tho). Ngga pernah kepikiran lagi untuk menggunakan windows sebagai daily driver gue, dikarenakan gue berasa kesulitan untuk config segala kebutuhan development gue, ngga ada package manager, terminal ( cmd ) nya aneh, dan semua config biasanya based on GUI. (Iye, i tau soal [chocolatey](https://chocolatey.org/) pernah coba juga, tapi gue merasa aneh nge-gunainnya 💀).

Karena tempat kerja gue yang sekarang memodalkan gue laptop dengan pre-installed Windows 10, dan gue malas banget install semuanya lagi, soalnya bulan ini gue beberapa kali install ulang laptop untuk menyesuaikan development environment ( tapi ya gitu bosen, oprek lagi), dan Alhamdulillah ya [Microsoft](https://www.linkedin.com/company/microsoft/) telah rilis [Windows terminal](https://devblogs.microsoft.com/commandline/introducing-windows-terminal/) dan juga [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10). 🎉 I jadi memutuskan untuk coba WSL (dengan ubuntu 20.04) didalam windows terminal sebagai development environment.


*WSL Apasih ngab?* 

WSL / Windows Subsystem for Linux, adalah sebuah fitur di windows 10 yang memungkinan running linux shell di windows 10 tanpa perlu install linux ke disk storage. WSL itu lightweight 🛩️ dan hanya shell / terminal aja tanpa GUI.



*Masalah nggatuh bang? Lancar ngga tuh buat kerja?*

Sampai sekarang sih ngga ada masalah, bahkan gue merasa kalo WSL bener-bener melakukan kerja yang bagus untuk integrasi W10 dengan linux. Proyek [Storybook](https://storybook.js.org/) gue jalan lancar dan gue bisa ngoding langsung dengan [VSCode](https://code.visualstudio.com/) tanpa perlu config lagi. Ya walaupun begitu gue juga mengalami "cegukan", tapi mudah-mudahan bukan pertanda hal buruk terjadi. Tapi emang gue make nya aja yang kelewatan sih hehehe. 😅

## Mengaktifkan WSL

Sebenernya WSL sudah ada didalam fitur windows 10, tinggal kita aktifkan aja, tapi sebelum aktifin WSL, gue kasih tau OS yang gue pake ya:

```
Edition:		Windows 10 Home Single Language
Version:		1909
Installed On:	09/03/2020
OS Build:		18363.836
```

Sip, semoga di versi lain juga sama ya stepnya.



Pertama, tekan start atau search keyword ini:

```
Windows Features
```

Nanti akan muncul:

```
Turn Windows Features On or Off
```

pilih opsi tersebut kemudian akan muncul dialog seperti ini:

![cloudinary](https://res.cloudinary.com/hendrasadewa/image/upload/v1591356042/windows_features_dialog_pplt0p.png)

Cari fitur bernama `Windows Subsystem for Linux`, kemudian check fitur tersebut untuk mengaktifkannya.

Atau ngga bisa dengan menggunakan command line:

```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```



Lanjut restart pc / laptopnya.



Ketika sudah menyala kembali, kuy buka Windows Store, dan  search distro linux yang disukai (Disini gue pakai Ubuntu 20.04). Kemudian install dan tunggu hingga selesai:

![microsoft store, ubuntu](https://res.cloudinary.com/hendrasadewa/image/upload/v1591356425/ms_store_ubuntu_avkiwt.png)



Okay, untuk WSL sudah diaktifkan sekarang tinggal coba running di command prompt

dengan cara running perintah `wsl`.

![wsl di cmd](https://res.cloudinary.com/hendrasadewa/image/upload/v1591356591/wsl_on_cmd_znkxga.png)

okeh done ya, oiya tampilan terminal gue kek gitu karena udah di replace dengan [zsh](https://en.wikipedia.org/wiki/Z_shell) + [oh-my-zsh](https://ohmyz.sh/).

## Windows Terminal

Bosen kan pake cmd, sekaran windows udah punya Windows terminal, silahkan download disini [official windows terminal download in microsoft store](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab).

Kalo udah, tinggal launch dan pilih drop down menu, klik console yang diinginkan:

![windows terminal](https://res.cloudinary.com/hendrasadewa/image/upload/v1591356986/w_terminl_withh_ubuntu_lbfpac.png)

nanti akan muncul shell seperti terminal ubuntu.

![running on w10 terminal](https://res.cloudinary.com/hendrasadewa/image/upload/v1591357236/running_on_wsl_gyp9lv.png)



## Setup Front-End (React / Node) Development Environment

Okay, lanjut di hal yang cukup menyenangkan, berikut list tools / apps yang gue butuhkan untuk development:

- Node
- Yarn
- VSCode
- Git (Sudah terintall)
- Curl (Sudah terintall)
- ZSH
- oh-my-zsh

### Node & Yarn

Mari mulai dari node, disini gue pakai nvm, incase ada kebutuhan untuk gonta-ganti versi node, gue bisa dengan mudah ganti versi dibanding harus install ulang. Cara installnya tinggal copas perintah berikut:

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

lalu ketika selesai, reload shell dengan perintah:

```bash
source ~/.profile
```

lalu check installasi nvm dengan perintah:

```bash
nvm --version
```

jika sudah terinstall, maka tinggal install node versi terkini dengan perintah 

```bash
nvm install node
```

lalu gunakan versi node yang terintall tadi dengan perintah

```bash
nvm use node
```

Oiya, untuk package manager, gue biasa pakai [yarn](https://yarnpkg.com/), cara install nya tinggal running perintah:

```bash
npm install -g yarn
```



### VSCode

Jika sudah, mari install vscode, caranya gampang banget tinggal download dari [situs official vscode](https://code.visualstudio.com/), terus pilih download for windows. Tungguin, sampai selesai download lalu install deh (next next next...).

Kalo udah install, lanjut config dan install ekstensi vscode berikut:

![extension vscode recc](https://res.cloudinary.com/hendrasadewa/image/upload/v1591358460/ext_vscode_djyt0u.png)

Yang perlu banget adalah: `Remote - WSL` nah ini bakalan ngemudahin waktu develop project yang disimpan dalam layer WSL. VS Intellicode juga membantu dalam coding dengan merekomendasikan command / props via AI, coding jadi lebih cepet.

Lanjut ke config, tekan `CTRL`+`,` di vscode lalu pilih `open settings (JSON)`, lalu copas code berikut:

```json
{
    "workbench.colorTheme": "Night Owl",
    "workbench.iconTheme": "material-icon-theme",
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "workbench.sideBar.location": "right",
    "editor.lineHeight": 26,
    "editor.fontSize": 16,
    "editor.tabSize": 2,
    "editor.minimap.enabled": false,
    "git.autofetch": true,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

Untuk colorTheme dan iconTheme bisa dipilih sesuai selera. Dikarenakan mata gue yang mulai rada burem, gue perlu menyesuaikan font sizes jadi `16` dan line height jadi `26`, dan untuk ukuran Tab gue terbiasa menggunakan `2` spaces, dan gue takeout minimap, karena gue merasa terdistraksi dengan tampilan minimap.



### Zsh + Oh-My-ZSH

Untuk shell pastilah [zsh](https://www.zsh.org/), ekstensinya banyak, dan juga lebih ringan dibanding [fish](https://fishshell.com/). Cara installnya mulai dari install zsh dengan perintah:

```shell
sudo apt install zsh
```

kemudian install [Oh-My-ZSH ](https://ohmyz.sh/)dengan perintah

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

ketika installasi berjalan, akan diminta password untuk mengganti default shell (bash) dengan zsh, silahkan isikan passwordnya.

setelah installasi selesai, restart windows terminal.



### Config NVM di ZSH

Setelah selesai install zsh, sekarang tinggal config agar nvm dapat running di zsh.

Pertama, buka file `~/.zshrc` dengan text editor yang biasa dipakai misal dengan vim:

```bash
vim ~/.zshrc
```

kedua copy-paste perintah berikut, letakan di paling bawah dari file:

```sh
#  NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

terakhir save (jika pakai vim bisa pakai `:wq` ) lalu reload ulang shell dengan perintah:

```sh
source ~/.zshrc
```

Selamat nvm sudah dapat dijalankan!🎉



## React development

Semuanya sudah terintall, tinggal kita coba buat project starter react.

Buka terminal, lalu jalankan perintah

```sh
npx create-react-app hello-world
```

tunggu hingga selesai~

![running npx create react app in wsl](https://res.cloudinary.com/hendrasadewa/image/upload/v1591360016/installing_new_react_project_dkql48.png)

jika sudah, buka project dengan perintah

```sh
code hello-world
```

VSCode akan menginstall plugin jika pertama kali dibuka melalui wsl, lalu window vscode akan terbuka, jadi sabar ya mungkin agak lama.

![done](https://res.cloudinary.com/hendrasadewa/image/upload/v1591360396/done_uhudnc.png)

ketika sudah masuk kedalam folder `hello-world` dengan perinah dibawah ini melalui terminal:

```sh
cd hello-world
```

lalu jalankan development server dengan running perintah

```sh
yarn start
```

![project started](https://res.cloudinary.com/hendrasadewa/image/upload/v1591360401/yarn_start_kbbpui.png)

Check browser dengan alamat yang tertera`localhost:3000`. Nanti akan muncul tampilan berikut:

![react running in browser](https://res.cloudinary.com/hendrasadewa/image/upload/v1591360395/running_on_browser_cb5fkz.png)

Yeeay, sudah complete, happy hacking folks! 👨‍💻👩‍💻