'use strict'

const config = require('../config.js')
const store = require('../store.js')

const titleArray = [ 'bento box', 'sushi roll', 'lego man', 'mini cactus', 'eclair', 'sriracha', 'terrarium', 'pineapple', 'platypus' ]

const getCart = () => {
  return $.ajax({
    url: config.apiOrigin + '/buyers',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const getHistory = () => {
  return $.ajax({
    url: config.apiOrigin + '/buyers',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const updateCart = (data) => {
  console.log('update cart ajax is sent:')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/buyers/' + store.buyerId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'buyer': {
        'cart': [{
          'title': titleArray[store.printId],
          'quantity': data.cart.quantity,
          'idNum': store.printId,
          'purchased': 'false'
        }]
      }
    }
  })
}

const removeItem = (data) => {
  console.log('remove request initiated')
  return $.ajax({
    url: config.apiOrigin + '/buyers/' + store.buyerId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'buyer': {
        'cart': [{
          'title': titleArray[store.printId],
          'quantity': 0,
          'idNum': store.printId,
          'purchased': 'false'
        }]
      }
    }
  })
}

module.exports = {
  getCart,
  updateCart,
  removeItem,
  getHistory
}
