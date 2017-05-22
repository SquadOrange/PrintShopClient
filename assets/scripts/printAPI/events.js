'use strict'
// requiring the necesary files...
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onUpdateCart = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
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
