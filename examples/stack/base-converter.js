import { faker } from '@faker-js/faker';
import 'sucrase/register';

import Stack from '../../src/stack/based-in-weakmap/stack';

function baseConverter(decimalNumber, base) {
  const stack = new Stack();

  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ';

  let number = decimalNumber;
  let divModule;

  if (!(base >= 2 && base <= 36)) return '';

  while (number > 0) {
    divModule = Math.floor(number % base);

    stack.push(divModule);

    number = Math.floor(number / base);
  }

  let baseData = '';

  while (!stack.isEmpty()) {
    baseData += digits[stack.pop()];
  }

  return baseData;
}

const numberToConver = faker.datatype.number({ min: 1000, max: 3000 });

const numberConvertedBase4 = baseConverter(numberToConver, 8);
const numberConvertedBase8 = baseConverter(numberToConver, 16);
const numberConvertedBase16 = baseConverter(numberToConver, 32);

console.log(`Decimal: ${numberToConver} base8: ${numberConvertedBase4}`);
console.log(`Decimal: ${numberToConver} base16: ${numberConvertedBase8}`);
console.log(`Decimal: ${numberToConver} base32: ${numberConvertedBase16}`);
