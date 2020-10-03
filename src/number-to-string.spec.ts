import terbilang from './number-to-string';
import * as chai from 'chai';

const expect = chai.expect;
describe('Terbilang Library', () => {

  it('should be able to convert number < 12', () => {
    expect(terbilang(1)).to.equal('satu');
    expect(terbilang(2)).to.equal('dua');
    expect(terbilang(3)).to.equal('tiga');
    expect(terbilang(4)).to.equal('empat');
    expect(terbilang(5)).to.equal('lima');
    expect(terbilang(6)).to.equal('enam');
    expect(terbilang(7)).to.equal('tujuh');
    expect(terbilang(8)).to.equal('delapan');
    expect(terbilang(9)).to.equal('sembilan');
    expect(terbilang(10)).to.equal('sepuluh');
    expect(terbilang(11)).to.equal('sebelas');

    // in english
    expect(terbilang(1, {language: 'en'})).to.equal('one');
    expect(terbilang(2, {language: 'en'})).to.equal('two');
    expect(terbilang(3, {language: 'en'})).to.equal('three');
    expect(terbilang(4, {language: 'en'})).to.equal('four');
    expect(terbilang(5, {language: 'en'})).to.equal('five');
    expect(terbilang(6, {language: 'en'})).to.equal('six');
    expect(terbilang(7, {language: 'en'})).to.equal('seven');
    expect(terbilang(8, {language: 'en'})).to.equal('eight');
    expect(terbilang(9, {language: 'en'})).to.equal('nine');
    expect(terbilang(10, {language: 'en'})).to.equal('ten');
    expect(terbilang(11, {language: 'en'})).to.equal('eleven');
  });

  it('should be able to convert number >= 12 and < 20', () => {
    expect(terbilang(12)).to.equal('dua belas');
    expect(terbilang(16)).to.equal('enam belas');
    expect(terbilang(19)).to.equal('sembilan belas');

    // in english
    expect(terbilang(12, {language: 'en'})).to.equal('twelve');
    expect(terbilang(16, {language: 'en'})).to.equal('sixteen');
    expect(terbilang(19, {language: 'en'})).to.equal('nineteen');
  });

  it('should be able to convert number >= 20 and < 100', () => {
    expect(terbilang(20)).to.equal('dua puluh');
    expect(terbilang(21)).to.equal('dua puluh satu');
    expect(terbilang(45)).to.equal('empat puluh lima');
    expect(terbilang(99)).to.equal('sembilan puluh sembilan');

    // in english
    expect(terbilang(19, {language: 'en'})).to.equal('nineteen');
    expect(terbilang(20, {language: 'en'})).to.equal('twenty');
    expect(terbilang(21, {language: 'en'})).to.equal('twenty one');
    expect(terbilang(45, {language: 'en'})).to.equal('forty five');
    expect(terbilang(99, {language: 'en'})).to.equal('ninety nine');
  });

  it('should be able to convert number >= 100 and < 200', () => {
    expect(terbilang(100)).to.equal('seratus');
    expect(terbilang(101)).to.equal('seratus satu');
    expect(terbilang(153)).to.equal('seratus lima puluh tiga');
    expect(terbilang(199)).to.equal('seratus sembilan puluh sembilan');

    // in english
    expect(terbilang(100, {language: 'en'})).to.equal('one hundred');
    expect(terbilang(101, {language: 'en'})).to.equal('one hundred one');
    expect(terbilang(153, {language: 'en'})).to.equal('one hundred fifty three');
    expect(terbilang(199, {language: 'en'})).to.equal('one hundred ninety nine');
  });

  it('should be able to convert number >= 200 and < 1000', () => {
    expect(terbilang(200)).to.equal('dua ratus');
    expect(terbilang(201)).to.equal('dua ratus satu');
    expect(terbilang(212)).to.equal('dua ratus dua belas');
    expect(terbilang(530)).to.equal('lima ratus tiga puluh');
    expect(terbilang(999)).to.equal('sembilan ratus sembilan puluh sembilan');

    // in english
    expect(terbilang(200, {language: 'en'})).to.equal('two hundred');
    expect(terbilang(201, {language: 'en'})).to.equal('two hundred one');
    expect(terbilang(212, {language: 'en'})).to.equal('two hundred twelve');
    expect(terbilang(530, {language: 'en'})).to.equal('five hundred thirty');
    expect(terbilang(999, {language: 'en'})).to.equal('nine hundred ninety nine');
  });

  it('should be able to convert number >= 1000 and < 2000', () => {
    expect(terbilang(1000)).to.equal('seribu');
    expect(terbilang(1001)).to.equal('seribu satu');
    expect(terbilang(1102)).to.equal('seribu seratus dua');
    expect(terbilang(1536)).to.equal('seribu lima ratus tiga puluh enam');
    expect(terbilang(1999)).to.equal('seribu sembilan ratus sembilan puluh sembilan');

    // in english
    expect(terbilang(1000, {language: 'en'})).to.equal('one thousand');
    expect(terbilang(1001, {language: 'en'})).to.equal('one thousand one');
    expect(terbilang(1102, {language: 'en'})).to.equal('one thousand one hundred two');
    expect(terbilang(1536, {language: 'en'})).to.equal('one thousand five hundred thirty six');
    expect(terbilang(1999, {language: 'en'})).to.equal('one thousand nine hundred ninety nine');
  });

  it('should be able to convert number >= 2000 and < 10000', () => {
    expect(terbilang(2000)).to.equal('dua ribu');
    expect(terbilang(2001)).to.equal('dua ribu satu');
    expect(terbilang(5379)).to.equal('lima ribu tiga ratus tujuh puluh sembilan');
    expect(terbilang(9999)).to.equal('sembilan ribu sembilan ratus sembilan puluh sembilan');

    // in english
    expect(terbilang(2000, {language: 'en'})).to.equal('two thousand');
    expect(terbilang(2001, {language: 'en'})).to.equal('two thousand one');
    expect(terbilang(5379, {language: 'en'})).to.equal('five thousand three hundred seventy nine');
    expect(terbilang(9999, {language: 'en'})).to.equal('nine thousand nine hundred ninety nine');
  });

  it('should be able to convert number >= 10000 and < 1000000', () => {
    expect(terbilang(10000)).to.equal('sepuluh ribu');
    expect(terbilang(20001)).to.equal('dua puluh ribu satu');
    expect(terbilang(500379)).to.equal('lima ratus ribu tiga ratus tujuh puluh sembilan');
    expect(terbilang(999999)).to.equal('sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan');

    // in english
    expect(terbilang(10000, {language: 'en'})).to.equal('ten thousand');
    expect(terbilang(20001, {language: 'en'})).to.equal('twenty thousand one');
    expect(terbilang(500379, {language: 'en'})).to.equal('five hundred thousand three hundred seventy nine');
    expect(terbilang(999999, {language: 'en'})).to.equal('nine hundred ninety nine thousand nine hundred ninety nine');
  });

  it('should be able to convert number >= 1000000 and < 1000000000', () => {
    expect(terbilang(1000000)).to.equal('satu juta');
    expect(terbilang(1000100)).to.equal('satu juta seratus');
    expect(terbilang(12323344)).to.equal('dua belas juta tiga ratus dua puluh tiga ribu tiga ratus empat puluh empat');
    expect(terbilang(321312333)).to.equal('tiga ratus dua puluh satu juta tiga ratus dua belas ribu tiga ratus tiga puluh tiga');
    expect(terbilang(999999999)).to.equal('sembilan ratus sembilan puluh sembilan juta sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan');

    // in english
    expect(terbilang(1000000, {language: 'en'})).to.equal('one million');
    expect(terbilang(1000100, {language: 'en'})).to.equal('one million one hundred');
    expect(terbilang(12323344, {language: 'en'})).to.equal('twelve million three hundred twenty three thousand three hundred forty four');
    expect(terbilang(321312333, {language: 'en'})).to.equal('three hundred twenty one million three hundred twelve thousand three hundred thirty three');
    expect(terbilang(999999999, {language: 'en'})).to.equal('nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
  });

  it('should be able to convert number >= 1000000000 and < 1000000000000', () => {
    expect(terbilang(1000000000)).to.equal('satu milyar');
    expect(terbilang(1001000000)).to.equal('satu milyar satu juta');
    expect(terbilang(587363123376)).to.equal('lima ratus delapan puluh tujuh milyar tiga ratus enam puluh tiga juta seratus dua puluh tiga ribu tiga ratus tujuh puluh enam');
    expect(terbilang(789632362376)).to.equal('tujuh ratus delapan puluh sembilan milyar enam ratus tiga puluh dua juta tiga ratus enam puluh dua ribu tiga ratus tujuh puluh enam');
    expect(terbilang(999999999999)).to.equal('sembilan ratus sembilan puluh sembilan milyar sembilan ratus sembilan puluh sembilan juta sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan');

    // in english
    expect(terbilang(1000000000, {language: 'en'})).to.equal('one billion');
    expect(terbilang(1001000000, {language: 'en'})).to.equal('one billion one million');
    expect(terbilang(587363123376, {language: 'en'})).to.equal('five hundred eighty seven billion three hundred sixty three million one hundred twenty three thousand three hundred seventy six');
    expect(terbilang(789632362376, {language: 'en'})).to.equal('seven hundred eighty nine billion six hundred thirty two million three hundred sixty two thousand three hundred seventy six');
    expect(terbilang(999999999999, {language: 'en'})).to.equal('nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
  });

  it('should be able to convert number with type string', () => {
    expect(terbilang('1000000000')).to.equal('satu milyar');
    expect(terbilang('1001000000')).to.equal('satu milyar satu juta');
    expect(terbilang('587363123376')).to.equal('lima ratus delapan puluh tujuh milyar tiga ratus enam puluh tiga juta seratus dua puluh tiga ribu tiga ratus tujuh puluh enam');
    expect(terbilang('789632362376')).to.equal('tujuh ratus delapan puluh sembilan milyar enam ratus tiga puluh dua juta tiga ratus enam puluh dua ribu tiga ratus tujuh puluh enam');
    expect(terbilang('999999999999')).to.equal('sembilan ratus sembilan puluh sembilan milyar sembilan ratus sembilan puluh sembilan juta sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan');

    // in english
    expect(terbilang('1000000000', {language: 'en'})).to.equal('one billion');
    expect(terbilang('1001000000', {language: 'en'})).to.equal('one billion one million');
    expect(terbilang('587363123376', {language: 'en'})).to.equal('five hundred eighty seven billion three hundred sixty three million one hundred twenty three thousand three hundred seventy six');
    expect(terbilang('789632362376', {language: 'en'})).to.equal('seven hundred eighty nine billion six hundred thirty two million three hundred sixty two thousand three hundred seventy six');
    expect(terbilang('999999999999', {language: 'en'})).to.equal('nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
  });

  it('should throw error if given value neither string nor number', () => {
    const notNumber: any = new Date();
    expect(() => terbilang(notNumber)).to.throw('value must be either string, number, or bigint');
  });

});
