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

const getCartHas = () => {
  return $.ajax({
    url: config.apiOrigin + '/buyers',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const createPrint = (data) => {
  console.log('update cart ajax is sent:')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/prints',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'print': {
        'title': titleArray[store.printId],
        'quantity': data.cart.quantity,
        'idNum': store.printId,
        'purchased': 'false'
      }
    }
  })
}

// const updateCart = (data) => {
//   console.log('update cart ajax is sent:')
//   console.log(data)
//   return $.ajax({
//     url: config.apiOrigin + '/buyers/' + store.buyerId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       'buyer': {
//         'cart': [{
//           'title': titleArray[store.printId],
//           'quantity': data.cart.quantity,
//           'idNum': store.printId,
//           'purchased': 'false'
//         }]
//       }
//     }
//   })
// }

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

const makeCharge = function (token) {
  console.log('at make charge')
  return $.ajax({
    url: config.apiOrigin + '/charge',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: token
  })
}

module.exports = {
  getCart,
  // updateCart,
  removeItem,
  getHistory,
  getCartHas,
  makeCharge,
  createPrint
}
