'use strict'
// requiring the necesary files...
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onUpdateCart = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const idNum = $(event.target).attr('data-id')
  store.printId = idNum
  console.log('id num:', idNum)
  console.log('cart object:', data)
  api.updateCart(data)
    .then(ui.updateCartSuccess)
    .catch(ui.updateCartFailure)
}

const addPrintHandlers = () => {
  $('.print').on('submit', onUpdateCart)
}

module.exports = {
  addPrintHandlers
}
