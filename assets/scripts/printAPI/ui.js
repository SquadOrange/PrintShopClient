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
  removeItemFailure
}
