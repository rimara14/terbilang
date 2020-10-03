export default function main(value: number | string | bigint, options?: IOptions): string {
  return numberToString(value, {...options});
}

const en = {
  '': '',
  'satu': 'one', // 1
  'dua': 'two', // 2
  'tiga': 'three', // 3
  'empat': 'four', // 4
  'lima': 'five', // 5
  'enam': 'six', // 6
  'tujuh': 'seven', // 7
  'delapan': 'eight', // 8
  'sembilan': 'nine', // 9
  'sepuluh': 'ten', // 10
  'sebelas': 'eleven', // 11
  'dua belas': 'twelve', // 12
  'tiga belas': 'thirteen', // 13
  'empat belas': 'fourteen', // 14
  'lima belas': 'fifteen', // 15
  'enam belas': 'sixteen', // 16
  'tujuh belas': 'seventeen', // 17
  'delapan belas': 'eighteen', // 18
  'sembilan belas': 'nineteen', // 19
  'dua puluh': 'twenty', // 20
  'tiga puluh': 'thirty', // 30
  'empat puluh': 'forty', // 40
  'lima puluh': 'fifty', // 50
  'enam puluh': 'sixty', // 60
  'tujuh puluh': 'seventy', // 70
  'delapan puluh': 'eighty', // 80
  'sembilan puluh': 'ninety', // 90
  'ribu': 'thousand', // 10 ^ 3
  'juta': 'million', // 10 ^ 6
  'milyar': 'billion', // 10 ^ 9
  'triliun': 'trillion', // 10 ^ 12
};

const ONES = [
  '',
  'satu', // 1
  'dua', // 2
  'tiga', // 3
  'empat', // 4
  'lima', // 5
  'enam', // 6
  'tujuh', // 7
  'delapan', // 8
  'sembilan', // 9
  'sepuluh', // 10
  'sebelas', // 11
  'dua belas', // 12
  'tiga belas', // 13
  'empat belas', // 14
  'lima belas', // 15
  'enam belas', // 16
  'tujuh belas', // 17
  'delapan belas', // 18
  'sembilan belas', // 19
];

// The capacity can be increased by adding the names of large powers of 10 here.
const POWER = [
  '',
  'ribu', // 10 ^ 3
  'juta', // 10 ^ 6
  'milyar', // 10 ^ 9
  'triliun', // 10 ^ 12
];

function divmod(n: bigint, d: bigint) {
  return [n / d, n % d];
}

/**
 * Returns an array representing the correct string representation of a number
 * less than 100.
 *
 * @param n The number less than 100 to represent.
 * @param lang The specific language to use
 */
function twoDigits(n: bigint, lang: string) {
  if (n === BigInt(0)) {
    return [];
  }
  if (n < BigInt(20)) {
    // we have already calculated the string
    return [translate(ONES[Number(n)], lang)];
  }
  const [tens, ones] = divmod(n, BigInt(10));
  // tens will be at least 2 since 20 ≤ n.
  let result: any[];
  if (lang === 'en') {
    result = [translate(ONES[Number(tens)] + ' puluh', lang)]
  } else {
    result = [ONES[Number(tens)], 'puluh'];
  }

  if (ones !== BigInt(0)) {
    result.push(translate(ONES[Number(ones)], lang));
  }
  return result
}

/**
 * Returns an array representing the correct string representation of a number
 * less than 1000.
 *
 * @param n The number less than 1000 to represent.
 * @param lang The specific language to return words.
 */
function threeDigits(n: bigint, lang: string) {
  const [hundred, tensAndOnes] = divmod(n, BigInt(100));

  const smaller = twoDigits(tensAndOnes, lang);

  if (hundred === BigInt(0)) {
    return smaller;
  }

  if (lang === 'en') {
    return [translate(ONES[Number(hundred)], lang), 'hundred']
        .concat(smaller);
  } else {
    return [hundred === BigInt(1) ? 'seratus' : `${translate(ONES[Number(hundred)], lang)} ratus`]
        .concat(smaller);
  }
}

/**
 * Converts a number into a human readable string representation of the number.
 * That is, given a series of digits; in the form of a string, number or bigint,
 * will return a string that represents that number in words.
 *
 * @example
 * ```js
 * // Value passed as a string.
 * numberToString('1001'); // 'seribu satu'
 *
 * // Value passed as a number.
 * numberToString(1212); // 'seribu dua ratus dua belas'
 *
 * // Value passed as a bigint.
 * numberToString(BigInt(10011)); // 'sepuluh ribu sebelas'
 * ```
 *
 * @param value The number to convert into words.
 * @param language The specific language to return words.
 */
function numberToString(value: number | string | bigint, {language = 'id'}: IOptions): string {
  if (!(new Set(['bigint', 'string', 'number']).has(typeof value))) {
    throw new Error('value must be either string, number, or bigint');
  }

  let n = BigInt(value);
  let power = 0;
  const result: Array<string> = [];

  // We iterate through the groups of three digits from the least significant to
  // most significant digits.
  while (n !== BigInt(0)) {
    if (power >= POWER.length) {
      console.error('Numbers this big are not implemented.');
      return '';
    }
    const [remaining, three] = divmod(n, BigInt(1000));
    n = remaining;

    // Check for special case when there is only one thousand.
    if (three === BigInt(1) && power === 1) {
      if (language === 'en') {
        result.push('one thousand');
      } else {
        result.push('seribu');
      }
    } else if (three !== BigInt(0)) {
      if (power > 0) {
        result.push(translate(POWER[power], language));
      }
      result.push(threeDigits(three, language).join(' '));
    }
    power += 1;
  }

  return result.reverse().join(' ');
}

function translate(key: string, lang: string): string {
  switch (lang) {
    case 'en':
      return en[key];
    default:
      return key;
  }
}

interface IOptions {
  language?: 'id' | 'en';
}
