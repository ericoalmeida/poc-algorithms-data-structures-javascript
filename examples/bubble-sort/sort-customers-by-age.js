const { customers } = require('./customers')
const { bubbleSort } = require('../../src/bubble-sort/bubble-sort')

function compareCustomerAge(currentCustomer, nextCustomer){
  return currentCustomer.age > nextCustomer.age
}

bubbleSort(customers, compareCustomerAge)

console.log(customers)
