'use strict'

const config = require('../config.js')
const store = require('../store.js')

const titleArray = [ 'bento box', 'sushi roll', 'lego man', 'mini cactus', 'eclair', 'sriracha', 'terrarium', 'pineapple', 'platypus' ]

const createOrder = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const showOrder = () => {
  return $.ajax({
    url: config.apiOrigin + '/orders',
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
  createOrder,
  updateById,
  showOrder,
  makeCharge,
  createPrint,
  indexPrints,
  removeById
}
