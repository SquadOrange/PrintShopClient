'use strict'

const store = require('../store.js')

const emptyCartSuccess = (data) => {
  console.log('cart update success')
  console.log('cart UI:', data)
}

const emptyCartFailure = (response) => {
  console.log('cart update failure')
}

module.exports = {
  emptyCartSuccess,
  emptyCartFailure
}
