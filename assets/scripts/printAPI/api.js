'use strict'

const config = require('../config.js')
const store = require('../store.js')

const makeEmptyCart = () => {
  console.log('update cart ajax is sent:')
  return $.ajax({
    url: config.apiOrigin + '/buyers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'buyer': {
        'cart': [{
          'quantity': 0,
          'idNum': 9,
          'purchased': 'false'
        }]
      }
    }
  })
}

module.exports = {
  makeEmptyCart
}
