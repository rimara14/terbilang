export default function main(value: number | string | bigint): string {
  return numberToString(value);
}

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
  'sembilan belas' // 19
];

// The capacity can be increased by adding the names of large powers of 10 here.
const POWER = [
  '',
  'ribu', // 10 ^ 3
  'juta', // 10 ^ 6
  'milyar', // 10 ^ 9
  'triliun' // 10 ^ 12
];

function divmod(n: bigint, d: bigint) {
  return [n / d, n % d];
}

/**
 * Returns an array representing the correct string representation of a number
 * less than 100.
 * 
 * @param n The number less than 100 to represent.
 */
function twoDigits(n: bigint) {
  if (n === BigInt(0)) {
    return [];
  }
  if (n < BigInt(20)) {
    // we have already calculated the string
    return [ONES[Number(n)]];
  }
  const [tens, ones] = divmod(n, BigInt(10));
  // tens will be at least 2 since 20 ≤ n.
  const result = [ONES[Number(tens)], 'puluh'];
  if (ones !== BigInt(0)) {
    result.push(ONES[Number(ones)]);
  }
  return result
}

/**
 * Returns an array representing the correct string representation of a number
 * less than 1000.
 * 
 * @param n The number less than 1000 to represent.
 */
function threeDigits(n: bigint) {
  const [hundred, tensAndOnes] = divmod(n, BigInt(100));

  const smaller = twoDigits(tensAndOnes);

  if (hundred === BigInt(0)) {
    return smaller;
  }

  return [hundred === BigInt(1) ? 'seratus' : `${ONES[Number(hundred)]} ratus`]
    .concat(smaller);
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
 */
function numberToString(value: number | string | bigint): string {
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
      result.push('seribu');
    } else if (three !== BigInt(0)) {
      if (power > 0) {
        result.push(POWER[power]);
      }
      result.push(threeDigits(three).join(' '));
    }
    power += 1;
  }

  return result.reverse().join(' ');
}