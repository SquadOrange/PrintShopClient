'use strict'
// requiring the necesary files...
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onGetCart = function (event) {
  event.preventDefault()
  console.log('getCart button clicked')
  api.getCart()
    .then(ui.getCartSuccess)
    .catch(ui.getCartFailure)
}

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

const onRemove = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const idNum = $(event.target).attr('data-id')
  store.printId = idNum
  console.log('remove id num is ', idNum)
  console.log('remove cart object:', data)
  api.removeItem(data)
    .then(ui.removeItemSuccess)
    .catch(ui.removeItemFailure)
}

const onViewHistory = () => {
  event.preventDefault()
  console.log('getHistory button clicked')
  api.getHistory()
    .then(ui.getHistorySuccess)
    .catch(ui.getHistoryFailure)
}

const onViewCartHas = () => {
  event.preventDefault()
  console.log('cartHas button clicked')
  api.getCartHas()
    .then(ui.cartHasSuccess)
    .catch(ui.cartHasFailure)
}

const checkoutHandler = StripeCheckout.configure({
  key: 'pk_test_i1tYfJB6wVAjGr7vvXlkFZS7',
  locale: 'auto'
})

const handleToken = function (token) {
  fetch('/charge', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(token)
  })
  .then(output => {
    if (output.status === 'succeeded') {
      document.getElementById('shop').innerHTML = '<p>Purhcase complete!</p>'
    }
  })
}

const onCheckout = function (ev) {
  checkoutHandler.open({
    name: 'Sample Store',
    description: 'Example Purchase',
    token: handleToken
  })
}

const addPrintHandlers = () => {
  $('.print-container').on('submit', onUpdateCart)
  $('.cart-button').on('click', onGetCart)
  $('.remove').on('click', onRemove)
  $('.purcashed-button').on('click', onViewHistory)
  $('.cartHas-button').on('click', onViewCartHas)
  $('#buttonCheckout').on('click', onCheckout)
}

module.exports = {
  addPrintHandlers
}
