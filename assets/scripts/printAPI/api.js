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

const indexPrints = () => {
  return $.ajax({
    url: config.apiOrigin + '/prints',
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

const removeById = (printId) => {
  return $.ajax({
    url: config.apiOrigin + '/prints/' + printId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateById = (printId, data) => {
  return $.ajax({
    url: config.apiOrigin + '/prints/' + printId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const makeCharge = function (token) {
  console.log('at make charge')
  return $.ajax({
    url: config.apiOrigin + '/charges',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: token
  })
}

module.exports = {
  getCart,
  updateById,
  getHistory,
  makeCharge,
  createPrint,
  indexPrints,
  removeById
}
