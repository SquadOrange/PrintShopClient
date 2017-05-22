'use strict'

const config = require('../config.js')
const store = require('../store.js')

const updateCart = (data) => {
  console.log('update cart ajax is sent:', data)
  return $.ajax({
    url: config.apiOrigin + '/buyers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'buyer': {
        'cart': [{
          'quantity': data.cart.quantity,
          'idNum': store.printId,
          'purchased': 'false'
        }]
      }
    }
  })
}

module.exports = {
  updateCart
}
