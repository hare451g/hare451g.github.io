---
title: Install Docker di Ubuntu 18.04 LTS
date: 2020-03-21
description: Cara install Docker di ubuntu 18.04 dengan mudah melalui beberapa perintah sederhana.
heroImage: https://media.giphy.com/media/jYjA6fHBfAZvq/giphy.gif
series: docker
isPublished: true
---

Bagi web developer serta pengguna OS berbasis Linux seperti Ubuntu, sering kali mendapatkan tugas untuk 'deploy' website ke beberapa remote VM (Virtual Machine) atau VPS. Namun beberapa kali gue mendapatkan kesulitan untuk menyamakan config di VPS/VM dengan laptop yang digunakan untuk develop website.

Misal, jika ada project untuk membuat Website dengan spesifikasi server tujuan menggunakan CentOS, RDBMS Postgres, dan php7, sementara laptop yang digunakan untuk develop website adalah Ubuntu 18.04 tanpa terinstall Postgres dan php7 akan sangat ~~malas~~ makan waktu untuk melakukan konfigurasi environment development dengan environment server tujuan. Mau tidak mau di local harus install php7 dan posgres, belum lagi cara installasi kedua apps berbeda yang local pakai apt dan server pakai dnf, repot sekali.

[Docker](https://docker.com) merupakan salah satu solusi tepat untuk kasus tersebut, karena docker memiliki kemampuan untuk membuat 'Container' yang dapat di config menyerupai VPS/VM server, tanpa harus mengganggu environment yang ada di lokal. Konfigurasi mulai dari OS yang dipakai, aplikasi apa saja yang harus di install dalam image tersebut dapat dikemas dalam bentuk `Dockerfile` yang ditulis dengan gaya bahasa `yaml`.

Nah, cukup dulu bahas dockernya, mari kita lanjut ke cara installasi docker di ubuntu 18.04:

1. pastikan apt repository di update dulu

```bash
sudo apt update
```

2. install beberapa packages agar memungkinkan apt menggunakan package di HTTPS

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

3. lalu tambahkan official [GPG key](https://gnupg.org/) milik docker dengan perintah:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

4. lanjut daftarkan repo docker kedalam repo apt lokal

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
```

5. sebenarnya ubuntu sudah auto update repositori ketika kita tambahkan dengan perintah `add-apt-repository` (hah?! kita?), tapi pastikan lagi saja dengan jalankan perintah update:

```bash
sudo apt update
```

6. nah sekarang check apakah docker sudah ada di dalam repositori apt lokal:

```bash
apt-cache policy docker-ce
```

kalau sudah ada, biasanya akan ada output seperti ini:

```bash
docker-ce:
  Installed: (none)
  Candidate: 18.03.1~ce~3-0~ubuntu
  Version table:
     18.03.1~ce~3-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
```

7. jika tak ada masalah, lanjut install docker dengan perintah apt

```bash
sudo apt install docker-ce
```

8. periksa apakah docker sudah dapat di running dengan perintah

```bash
sudo systemctl status docker
```

ketika dijalankan akan ada output seperti ini:

```bash
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: active (running) since Sat 2020-03-21 11:25:06 WIB; 3h 52min ago
     Docs: https://docs.docker.com
 Main PID: 1568 (dockerd)
    Tasks: 14
   Memory: 126.1M
   CGroup: /system.slice/docker.service
           └─1568 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock

```

9. terakhir coba jalankan perintah `docker` untuk memastikan docker benar-benar dapat digunakan:

```bash
docker
```

akan muncul output manual dari docker seperti ini:

```bash

Usage:	docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Options:
      --config string      Location of client config files (default "/home/hare/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket(s) to connect to
  -l, --log-level string   Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/home/hare/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/home/hare/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/home/hare/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit
```

\*jika tidak bisa running, dan muncul error `ERR PERMISSION DENIED`, gunakan sudo untuk menjalankan docker:

```bash
sudo docker
```

Sekarang docker sudah terinstall, sekarang tinggal explore lebih dalam tentang docker di [dokumentasi offical docker](https://docs.docker.com/) dan bisa juga explore container apa saja yang dapat di install atau di download ke local di [docker hub](https://hub.docker.com/).

Semoga bermanfaat, cheers 🥂
