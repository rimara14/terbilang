[![codecov](https://codecov.io/gh/rimara14/terbilang/branch/master/graph/badge.svg?token=k2udo33EUM)](https://codecov.io/gh/rimara14/terbilang)

## Introduction
**Terbilang** merupakan *library* untuk mengubah angka numerik menjadi bentuk terbilang. *Library* ini ditulis dalam JavaScript. Sebagai contoh:
```ini
123456 -> seratus dua puluh tiga ribu empat ratus lima puluh enam
```
Support input string ataupun number. Support hingga angka 999,999,999,999

## Installation
```bash
npm install angka-terbilang --save
```

## Usage
```bash
import terbilang from 'angka-terbilang';

terbilang(123456); // seratus dua puluh tiga ribu empat ratus lima puluh enam
terbilang('123456'); // seratus dua puluh tiga ribu empat ratus lima puluh enam
```