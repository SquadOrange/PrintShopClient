'use strict'

const config = require('../config.js')
const store = require('../store.js')

const updateCart = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/buyers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  updateCart
}
