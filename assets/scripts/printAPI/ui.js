'use strict'

const store = require('../store.js')

const updateCartSuccess = (data) => {
  console.log('cart update success')
  console.log('cart UI:', data)
}

const updateCartFailure = (response) => {
  console.log('cart update failure')
}

module.exports = {
  updateCartSuccess,
  updateCartFailure
}
