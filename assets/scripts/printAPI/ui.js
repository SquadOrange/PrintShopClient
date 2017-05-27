'use strict'

const store = require('../store.js')

const printCartHas = (data) => {
  let newStringArray = '\r\n'
  for (const i in data.buyers[0].cartHas) {
    newStringArray += (' \r\n' + data.buyers[0].cartHas[i].quantity + ' ' + data.buyers[0].cartHas[i].title + ' print(s), ')
  }
  return newStringArray
}

const cartHasSuccess = (data) => {
  console.log('got the history')
  if (data.buyers[0].cartHas.length === 0) {
    $('.cartHas-display').text("Don't forget to buy some prints!")
  } else {
    console.log('the cart has ', data.buyers[0].cartHas)
    $('.cartHas-display').text('Your cart has: ' + printCartHas(data) + ' Total Cost: $' + data.buyers[0].cost)
  }
}

const cartHasFailure = (response) => {
  console.log('cannot get cart')
  $('.cartHas-display').text('nothing in the cart to display')
}

const getCartSuccess = (data) => {
  console.log('got a cart')
  console.log('the cart has ', data)
  $('.cart-display').text(JSON.stringify(data))
}

const getCartFailure = (response) => {
  console.log('cannot get cart')
}

const printHistory = (data) => {
  let newStringArray = '\n'
  for (const i in data.buyers[0].alreadyPurchased) {
    newStringArray += (' ' + data.buyers[0].alreadyPurchased[i].title + ', ' + 'Quantity: ' + data.buyers[0].alreadyPurchased[i].quantity + ' ')
  }
  return newStringArray
}

const getHistorySuccess = (data) => {
  console.log('got the history')
  if (data.buyers[0].alreadyPurchased.length === 0) {
    $('.purchase-display').text("You haven't bought anything yet")
  } else {
    console.log('the cart has ', data.buyers[0].alreadyPurchased)
    $('.purchase-display').text('Items you have purchased: ' + printHistory(data))
  }
}

const getHistoryFailure = (response) => {
  console.log('cannot get cart')
  $('.purchase-display').text('no purchase history to display')
}

const createPrintSuccess = (response) => {
  console.log('created prints success')
  console.log('create print response:', response)
}

const createPrintFailure = (response) => {
  console.log('cart update failure')
  console.log(response)
}

// const updateCartSuccess = (data) => {
//   console.log('cart update success')
//   console.log('cart UI:', data)
// }
// const updateCartFailure = (response) => {
//   console.log('cart update failure')
// }

const removeItemSuccess = (data) => {
  console.log('removal success')
  console.log('removal:', data)
}

const removeItemFailure = (response) => {
  console.log('removal failure')
}

const tokenSuccess = (data) => {
  console.log('sucess', data)
  $('.purchaseConfirm').text('you have successfully paid')
}

const tokenFailure = (response) => {
  console.log('removal failure')
  $('.purchaseConfirm').text('unable to process purchase')
}

module.exports = {
  getCartSuccess,
  getCartFailure,
  // updateCartSuccess,
  // updateCartFailure,
  removeItemSuccess,
  removeItemFailure,
  getHistoryFailure,
  getHistorySuccess,
  cartHasSuccess,
  cartHasFailure,
  tokenSuccess,
  tokenFailure,
  createPrintFailure,
  createPrintSuccess
}
