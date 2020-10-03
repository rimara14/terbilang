import * as Benchmark from 'benchmark';
import terbilang from './number-to-string';

const suite = new Benchmark.Suite('fds', {});
suite
    .add('input -> 1', () => terbilang(1))
    .add('input -> 2', () => terbilang(2))
    .add('input -> 3', () => terbilang(3))
    .add('input -> 4', () => terbilang(4))
    .add('input -> 5', () => terbilang(5))
    .add('input -> 6', () => terbilang(6))
    .add('input -> 7', () => terbilang(7))
    .add('input -> 8', () => terbilang(8))
    .add('input -> 9', () => terbilang(9))
    .add('input -> 10', () => terbilang(10))
    .add('input -> 11', () => terbilang(11))
    .add('input -> 12', () => terbilang(12))
    .add('input -> 16', () => terbilang(16))
    .add('input -> 19', () => terbilang(19))
    .add('input -> 20', () => terbilang(20))
    .add('input -> 21', () => terbilang(21))
    .add('input -> 45', () => terbilang(45))
    .add('input -> 99', () => terbilang(99))
    .add('input -> 100', () => terbilang(100))
    .add('input -> 101', () => terbilang(101))
    .add('input -> 153', () => terbilang(153))
    .add('input -> 199', () => terbilang(199))
    .add('input -> 200', () => terbilang(200))
    .add('input -> 201', () => terbilang(201))
    .add('input -> 212', () => terbilang(212))
    .add('input -> 530', () => terbilang(530))
    .add('input -> 999', () => terbilang(999))
    .add('input -> 1000', () => terbilang(1000))
    .add('input -> 1001', () => terbilang(1001))
    .add('input -> 1102', () => terbilang(1102))
    .add('input -> 1536', () => terbilang(1536))
    .add('input -> 1999', () => terbilang(1999))
    .add('input -> 2000', () => terbilang(2000))
    .add('input -> 2001', () => terbilang(2001))
    .add('input -> 5379', () => terbilang(5379))
    .add('input -> 9999', () => terbilang(9999))
    .add('input -> 10000', () => terbilang(10000))
    .add('input -> 20001', () => terbilang(20001))
    .add('input -> 500379', () => terbilang(500379))
    .add('input -> 999999', () => terbilang(999999))
    .add('input -> 1000000', () => terbilang(1000000))
    .add('input -> 1000100', () => terbilang(1000100))
    .add('input -> 12323344', () => terbilang(12323344))
    .add('input -> 321312333', () => terbilang(321312333))
    .add('input -> 999999999', () => terbilang(999999999))
    .add('input -> 1000000000', () => terbilang(1000000000))
    .add('input -> 1001000000', () => terbilang(1001000000))
    .add('input -> 587363123376', () => terbilang(587363123376))
    .add('input -> 789632362376', () => terbilang(789632362376))
    .add('input -> 999999999999', () => terbilang(999999999999))
    .add('input -> \'1000000000\'', () => terbilang('1000000000'))
    .add('input -> \'1001000000\'', () => terbilang('1001000000'))
    .add('input -> \'587363123376\'', () => terbilang('587363123376'))
    .add('input -> \'789632362376\'', () => terbilang('789632362376'))
    .add('input -> \'999999999999\'', () => terbilang('999999999999'))
    .on('start', (event) => {
      console.log('\nbenchmark start\n=====================')
    })
    .on('cycle', (event) => {
      console.log(String(event.target));
    })
    .on('complete', () => {
      const fastest = suite.filter('fastest')[0];
      const slowest = suite.filter('slowest')[0];
      console.log('\nbenchmark complete\n=====================')
      console.log('fastest: ' + formatNumber(fastest.hz, 0) + ' ops/sec ±' + formatNumber(fastest.stats.rme, 2) + '%');
      console.log('slowest: ' + formatNumber(slowest.hz, 0) + ' ops/sec ±' + formatNumber(slowest.stats.rme, 2) + '%');
    })
    .run();

function formatNumber(num: number, fraction: number): string {
  return new Intl.NumberFormat('en-US', {maximumFractionDigits: fraction}).format(num);
}
