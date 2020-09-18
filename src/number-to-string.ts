export default function main(value: number | string): string {
  return numberToString(value);
}

function numberToString(value: number | string): string {
  if (!value) {
    return '';
  }

  let num: number;
  let numStr: string;
  if (typeof value === 'number') {
    num = value;
    numStr = value.toString();
  } else if (typeof value === 'string') {
    num = parseInt(value, 10);
    numStr = value;
  } else {
    throw new Error('value must be either string or number');
  }

  if (num < 12) {
    return convertNumber(numStr);
  }

  const nums = [];
  for (const n of numStr) {
    nums.push(convertNumber(n));
  }

  if (num < 20) {
    return nums[1] + ' belas';
  }

  if (num < 100) {
    return (nums[0] + ' puluh ' + nums[1]).trim();
  }

  if (num < 200) {
    return ('seratus ' + numberToString(parseInt(numStr.substring(1), 10))).trim();
  }

  if (num < 1000) {
    return (
      nums[0] + ' ratus ' + numberToString(parseInt(numStr.substring(1), 10))
    ).trim();
  }

  if (num < 2000) {
    return ('seribu ' + numberToString(parseInt(numStr.substring(1), 10))).trim();
  }

  if (num < 10000) {
    return (
      nums[0] + ' ribu ' + numberToString(parseInt(numStr.substring(1), 10))
    ).trim();
  }

  if (num < 1000000) {
    const perThousands = numStr.match(/\d{1,3}(?=(\d{3})*$)/g);
    return (
      numberToString(parseInt(perThousands[0], 10)) +
      ' ribu ' +
      numberToString(parseInt(perThousands[1], 10))
    ).trim();
  }

  if (num < 1000000000) {
    const perThousands = numStr.match(/\d{1,3}(?=(\d{3})*$)/g);
    return (
      numberToString(parseInt(perThousands[0], 10)) +
      ' juta ' +
      numberToString(parseInt(joinRest(perThousands), 10))
    ).trim();
  }

  if (num < 1000000000000) {
    const perThousands = numStr.match(/\d{1,3}(?=(\d{3})*$)/g);
    return (
      numberToString(parseInt(perThousands[0], 10)) +
      ' milyar ' +
      numberToString(parseInt(joinRest(perThousands), 10))
    ).trim();
  }

  return '';
}

function joinRest(arr: string[]): string {
  arr.splice(0, 1);
  return arr.join('');
}

function convertNumber(value: string): string {
  switch (value) {
    case '1':
      return 'satu';
    case '2':
      return 'dua';
    case '3':
      return 'tiga';
    case '4':
      return 'empat';
    case '5':
      return 'lima';
    case '6':
      return 'enam';
    case '7':
      return 'tujuh';
    case '8':
      return 'delapan';
    case '9':
      return 'sembilan';
    case '10':
      return 'sepuluh';
    case '11':
      return 'sebelas';
    default:
      return '';
  }
}
