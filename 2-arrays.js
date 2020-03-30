
const names = ["Theo", "Gianluca", "Badi"];

console.log(names[0])
console.log(names[1])

//Imagine these orders were not defined in code, but given by users
const order1 = { id: 1, price: 10, side: "bid", quantity: 1 }
const order2 = { id: 2, price: 11, side: "bid", quantity: 0.1 }
const order3 = { id: 3, price: 11, side: "bid", quantity: 0.2 }

const orders = []

orders.push(order1)
orders.push(order3)
orders.push(order2)

var sortedBids = orders.sort((a, b) => { return b.price - a.price })

console.log('orders', sortedBids)

console.log('highest bid price', sortedBids[0].price)

const arbPrice = 10
console.log("Should arb 1", shouldTriggerOrder(arbPrice, sortedBids))

//Remove first two orders (at price 11) from ob
sortedBids.splice(0, 2)

console.log("Should arb 2", shouldTriggerOrder(arbPrice, sortedBids))

if (shouldTriggerOrder(arbPrice, sortedBids)) {
  //place market order on valr
}

function shouldTriggerOrder(triggerPrice, orders) {
  const shouldArb = triggerPrice < orders[0].price
  return shouldArb // true or false
}

