import 'sucrase/register';

import { faker } from '@faker-js/faker';

import Stack from '../../src/stack/based-in-weakmap/stack';

function decimalToBinary(decimalNumber) {
  const stack = new Stack();

  let number = decimalNumber;
  let divModule;

  let binaryData = '';

  while (number > 0) {
    divModule = Math.floor(number % 2);
    stack.push(divModule);

    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    binaryData += stack.pop().toString();
  }

  return binaryData;
}

const numberToConvert = faker.datatype.number({ min: 1, max: 100 });
const numberConverted = decimalToBinary(numberToConvert);

console.log(`Decimal: ${numberToConvert} Binary: ${numberConverted}`);
