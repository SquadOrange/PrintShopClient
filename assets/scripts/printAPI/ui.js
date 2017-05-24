'use strict'

const store = require('../store.js')

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
    newStringArray += (' ' + data.buyers[0].alreadyPurchased[i].title + ' ' + data.buyers[0].alreadyPurchased[i].quantity + '\n')
  }
  return newStringArray
}

const getHistorySuccess = (data) => {
  console.log('got the history')
  for (const i in data.buyers[0].alreadyPurchased) {
    console.log('it is', data.buyers[0].alreadyPurchased[i].title, data.buyers[0].alreadyPurchased[i].quantity)
  }
  console.log('the cart has ', data.buyers[0].alreadyPurchased)
  $('.purchase-display').text('Purchase history is: ' + printHistory(data))
}

const getHistoryFailure = (response) => {
  console.log('cannot get cart')
  $('.purchase-display').text('no purchase history to display')
}

const updateCartSuccess = (data) => {
  console.log('cart update success')
  console.log('cart UI:', data)
}

const updateCartFailure = (response) => {
  console.log('cart update failure')
}

const removeItemSuccess = (data) => {
  console.log('removal success')
  console.log('removal:', data)
}

const removeItemFailure = (response) => {
  console.log('removal failure')
}

module.exports = {
  getCartSuccess,
  getCartFailure,
  updateCartSuccess,
  updateCartFailure,
  removeItemSuccess,
  removeItemFailure,
  getHistoryFailure,
  getHistorySuccess
}
