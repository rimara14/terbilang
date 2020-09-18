"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main(value) {
    return numberToString(value);
}
exports.default = main;
function numberToString(value) {
    if (!value) {
        return '';
    }
    const numStr = value.toString();
    if (value < 12) {
        return convertNumber(numStr);
    }
    const nums = [];
    for (const n of numStr) {
        nums.push(convertNumber(n));
    }
    if (value < 20) {
        return nums[1] + ' Belas';
    }
    if (value < 100) {
        return nums[0] + ' Puluh ' + nums[1];
    }
    if (value < 200) {
        return 'Seratus ' + numberToString(parseInt(numStr.substring(1), 10));
    }
    if (value < 1000) {
        return (nums[0] + ' Ratus ' + numberToString(parseInt(numStr.substring(1), 10)));
    }
    if (value < 2000) {
        return 'Seribu ' + numberToString(parseInt(numStr.substring(1), 10));
    }
    if (value < 10000) {
        return (nums[0] + ' Ribu ' + numberToString(parseInt(numStr.substring(1), 10)));
    }
    if (value < 1000000) {
        const perThousands = numStr.match(/\d{1,3}(?=(\d{3})*$)/g);
        return (numberToString(parseInt(perThousands[0], 10)) +
            ' Ribu ' +
            numberToString(parseInt(perThousands[1], 10)));
    }
    if (value < 1000000000) {
        const perThousands = numStr.match(/\d{1,3}(?=(\d{3})*$)/g);
        return (numberToString(parseInt(perThousands[0], 10)) +
            ' Juta ' +
            numberToString(parseInt(joinRest(perThousands), 10)));
    }
    if (value < 1000000000000) {
        const perThousands = numStr.match(/\d{1,3}(?=(\d{3})*$)/g);
        return (numberToString(parseInt(perThousands[0], 10)) +
            ' Milyar ' +
            numberToString(parseInt(joinRest(perThousands), 10)));
    }
    return '';
}
function joinRest(arr) {
    arr.splice(0, 1);
    return arr.join('');
}
function convertNumber(value) {
    switch (value) {
        case '1':
            return 'Satu';
        case '2':
            return 'Dua';
        case '3':
            return 'Tiga';
        case '4':
            return 'Empat';
        case '5':
            return 'Lima';
        case '6':
            return 'Enam';
        case '7':
            return 'Tujuh';
        case '8':
            return 'Delapan';
        case '9':
            return 'Sembilan';
        case '10':
            return 'Sepuluh';
        case '11':
            return 'Sebelas';
        default:
            return '';
    }
}
