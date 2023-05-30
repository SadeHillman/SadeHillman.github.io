// -- Products -- //
let products = {
  whiteCoffee: {
    stock: 4,
    price: 4,
  },

  blackCoffee: {
    stock: 7,
    price: 3.5,
  },

  muffin: {
    stock: 5,
    price: 5.5,
  },

  brownies: {
    stock: 1,
    price: 4.5,
  },

  pickles: {
    stock: 7,
    price: 100,
  },
}

function displayProducts() {
  document.getElementById('whiteCoffee').innerHTML =
    'White Coffe: ' + products.whiteCoffee.stock
  document.getElementById('blackCoffee').innerHTML =
    'Black Coffee: ' + products.blackCoffee.stock
  document.getElementById('muffin').innerHTML =
    'Muffin: ' + products.muffin.stock
  document.getElementById('brownies').innerHTML =
    'Browines: ' + products.brownies.stock
  document.getElementById('pickles').innerHTML =
    'Pickles:' + products.pickles.stock

  /******* Stretch Material
    Find the products
    Check Stock
    Get the element
    Display Out Of Stock elements 'Red'
    *********/
  let productNames = Object.keys(products)

  for (let i = 0; i < productNames.length; i++) {
    let productName = productNames[i]
    let productStock = products[productName].stock
    let productElement = document.getElementById(productName)

    if (productStock < 1) {
      productElement.style.color = 'red'
    }
    productElement.innerHTML = productName + ': ' + productStock
  }
}

displayProducts()

// -- CUSTOMERS -- //

let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize)

  let newOrder = []

  let productNames = Object.keys(products)

  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    newOrder.push(productName)
  }

  customer.order = newOrder
  displayCustomerOrder()
}

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer Order: ' + customer.order.join(', ')
}

document.getElementById('customerButton').onclick = generateCustomerOrder

// ---- Transactions --- //

let cash = 0
function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash: $' + cash
}

function fillOrder() {
  // loop through array
  //if instock sell and log sale
  //if not instock alert "OUT OF STOCK"
  //add Sale total
  // display new total
  /// clear customer order
  let saleTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]

    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      alert('OUT OF STOCK')
    }
  }
  cash += saleTotal
  customer.order = []
  displayProducts()
  displayCash()
  displayCustomerOrder()
}
displayCash()

document.getElementById('fillOrder').onclick = fillOrder

// -- UTIL -- //
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
