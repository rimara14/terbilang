import terbilang from './number-to-string';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('Terbilang Library', () => {

  it('should be able to convert number < 12' , () => {
    expect(terbilang(0)).to.equal('nol');
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
  });

  it('should be able to convert number >= 12 and < 20', () => {
    expect(terbilang(12)).to.equal('dua belas');
    expect(terbilang(16)).to.equal('enam belas');
    expect(terbilang(19)).to.equal('sembilan belas');
  });

  it('should be able to convert number >= 20 and < 100', () => {
    expect(terbilang(20)).to.equal('dua puluh');
    expect(terbilang(21)).to.equal('dua puluh satu');
    expect(terbilang(45)).to.equal('empat puluh lima');
    expect(terbilang(99)).to.equal('sembilan puluh sembilan');
  });

  it('should be able to convert number >= 100 and < 200', () => {
    expect(terbilang(100)).to.equal('seratus');
    expect(terbilang(101)).to.equal('seratus satu');
    expect(terbilang(153)).to.equal('seratus lima puluh tiga');
    expect(terbilang(199)).to.equal('seratus sembilan puluh sembilan');
  });

  it('should be able to convert number >= 200 and < 1000', () => {
    expect(terbilang(200)).to.equal('dua ratus');
    expect(terbilang(201)).to.equal('dua ratus satu');
    expect(terbilang(212)).to.equal('dua ratus dua belas');
    expect(terbilang(530)).to.equal('lima ratus tiga puluh');
    expect(terbilang(999)).to.equal('sembilan ratus sembilan puluh sembilan');
  });

  it('should be able to convert number >= 1000 and < 2000', () => {
    expect(terbilang(1000)).to.equal('seribu');
    expect(terbilang(1001)).to.equal('seribu satu');
    expect(terbilang(1102)).to.equal('seribu seratus dua');
    expect(terbilang(1536)).to.equal('seribu lima ratus tiga puluh enam');
    expect(terbilang(1999)).to.equal('seribu sembilan ratus sembilan puluh sembilan');
  });

  it('should be able to convert number >= 2000 and < 10000', () => {
    expect(terbilang(2000)).to.equal('dua ribu');
    expect(terbilang(2001)).to.equal('dua ribu satu');
    expect(terbilang(5379)).to.equal('lima ribu tiga ratus tujuh puluh sembilan');
    expect(terbilang(9999)).to.equal('sembilan ribu sembilan ratus sembilan puluh sembilan');
  });

  it('should be able to convert number >= 10000 and < 1000000', () => {
    expect(terbilang(10000)).to.equal('sepuluh ribu');
    expect(terbilang(20001)).to.equal('dua puluh ribu satu');
    expect(terbilang(500379)).to.equal('lima ratus ribu tiga ratus tujuh puluh sembilan');
    expect(terbilang(999999)).to.equal('sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan');
  });

  it('should be able to convert number >= 1000000 and < 1000000000', () => {
    expect(terbilang(1000000)).to.equal('satu juta');
    expect(terbilang(1000100)).to.equal('satu juta seratus');
    expect(terbilang(12323344)).to.equal('dua belas juta tiga ratus dua puluh tiga ribu tiga ratus empat puluh empat');
    expect(terbilang(321312333)).to.equal('tiga ratus dua puluh satu juta tiga ratus dua belas ribu tiga ratus tiga puluh tiga');
    expect(terbilang(999999999)).to.equal('sembilan ratus sembilan puluh sembilan juta sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan');
  });

  it('should be able to convert number >= 1000000000 and < 1000000000000', () => {
    expect(terbilang(1000000000)).to.equal('satu milyar');
    expect(terbilang(1001000000)).to.equal('satu milyar satu juta');
    expect(terbilang(587363123376)).to.equal('lima ratus delapan puluh tujuh milyar tiga ratus enam puluh tiga juta seratus dua puluh tiga ribu tiga ratus tujuh puluh enam');
    expect(terbilang(789632362376)).to.equal('tujuh ratus delapan puluh sembilan milyar enam ratus tiga puluh dua juta tiga ratus enam puluh dua ribu tiga ratus tujuh puluh enam');
    expect(terbilang(999999999999)).to.equal('sembilan ratus sembilan puluh sembilan milyar sembilan ratus sembilan puluh sembilan juta sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan');
  });

  it('should be able to convert number with type string', () => {
    expect(terbilang('1000000000')).to.equal('satu milyar');
    expect(terbilang('1001000000')).to.equal('satu milyar satu juta');
    expect(terbilang('587363123376')).to.equal('lima ratus delapan puluh tujuh milyar tiga ratus enam puluh tiga juta seratus dua puluh tiga ribu tiga ratus tujuh puluh enam');
    expect(terbilang('789632362376')).to.equal('tujuh ratus delapan puluh sembilan milyar enam ratus tiga puluh dua juta tiga ratus enam puluh dua ribu tiga ratus tujuh puluh enam');
    expect(terbilang('999999999999')).to.equal('sembilan ratus sembilan puluh sembilan milyar sembilan ratus sembilan puluh sembilan juta sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan');
  });

  it('should throw error if given value neither string nor number', () => {
    const notNumber: any = new Date();
    expect(() => terbilang(notNumber)).to.throw('value must be either string, number, or bigint');
  });

});