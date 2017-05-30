'use strict'
// requiring the necesary files...
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onGetCart = function (event) {
  event.preventDefault()
  api.getCart()
    .then(ui.getCartSuccess)
    .catch(ui.getCartFailure)
}

const onCreatePrint = function (event) {
  event.preventDefault()
  console.log(store.indexOfPrints)
  const data = getFormFields(event.target)
  // stores unique id for later use
  const printId = $(event.target).attr('data-id')
  store.printId = printId
  api.createPrint(data)
    .then(ui.createPrintSuccess)
    .catch(ui.createPrintFailure)
    .then(() => {
      api.indexPrints()
        .then(ui.indexPrintsSuccess)
        .catch(ui.indexPrintsFailure)
    })
}

const onUpdatePrint = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const idNum = $(event.target).attr('data-id')
  store.printId = idNum
  api.updatePrint(data)
    .then(ui.updatePrintSuccess)
    .catch(ui.updatePrintFailure)
}

const onViewHistory = () => {
  event.preventDefault()
  api.getHistory()
    .then(ui.getHistorySuccess)
    .catch(ui.getHistoryFailure)
}

const onIndexPrints = () => {
  event.preventDefault()
  api.indexPrints()
    .then(ui.indexPrintsSuccess)
    .catch(ui.indexPrintsFailure)
}

// Stripe
const checkoutHandler = StripeCheckout.configure({
  key: 'pk_test_i1tYfJB6wVAjGr7vvXlkFZS7',
  locale: 'auto'
})

// Stripe checkout
const handleToken = function (token) {
  api.makeCharge(token)
  .then(output => {
    console.log(output)
    if (output.status === 'succeeded') {
      $('.purchaseConfirm').text('Purhcase complete!')
    }
  })
  .then(ui.tokenSuccess)
  .catch(ui.tokenFailure)
}

// StripeCheckout functions
const onCheckout = function (ev) {
  checkoutHandler.open({
    name: 'Sample Store',
    description: 'Buying Prints',
    token: handleToken
  })
}

const addPrintHandlers = () => {
  // this is what will now post to make a new print
  $('.print-container').on('submit', onCreatePrint)
  $('.cart-button').on('click', onGetCart)
  $('.update-quantity').on('click', onUpdatePrint)
  $('.purcashed-button').on('click', onViewHistory)
  // index of all prints which belong to the user
  $('.cartHas-button').on('click', onIndexPrints)
  $('#buttonCheckout').on('click', onCheckout)
}

module.exports = {
  addPrintHandlers
}
