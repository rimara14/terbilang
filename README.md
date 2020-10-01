[![codecov](https://codecov.io/gh/rimara14/terbilang/branch/master/graph/badge.svg?token=k2udo33EUM)](https://codecov.io/gh/rimara14/terbilang)

## Introduction
***Terbilang** is a library to convert decimal number into spoken word. For example, `1024` as `Seribu Dua Puluh Empat`. Support up to 999,999,999,999*

**Terbilang** merupakan *library* untuk mengubah angka numerik menjadi bentuk terbilang. Sebagai contoh, `1024` menjadi `Seribu Dua Puluh Empat`. Mendukung hingga angka 999,999,999,999

## Installation
```bash
npm install angka-terbilang --save
```

## Usage
*Support input with type either `string` or `number`.*

*Support* masukkan dengan tipe `string` ataupun `number`.
```ts
import terbilang from 'angka-terbilang';

terbilang(123456); // seratus dua puluh tiga ribu empat ratus lima puluh enam
terbilang('123456'); // seratus dua puluh tiga ribu empat ratus lima puluh enam
```
