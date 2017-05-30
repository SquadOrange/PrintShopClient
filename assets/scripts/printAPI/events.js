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

const onCreatePrint = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const idNum = $(event.target).attr('data-id')
  store.printId = idNum
  console.log('id num:', idNum)
  console.log('print object:', data)
  api.createPrint(data)
    .then(ui.createPrintSuccess)
    .catch(ui.createPrintFailure)
    .then(() => {
      api.indexPrints()
        .then(ui.indexPrintsSuccess)
        .catch(ui.indexPrintsFailure)
    })
}

// const onUpdateCart = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const idNum = $(event.target).attr('data-id')
//   store.printId = idNum
//   console.log('id num:', idNum)
//   console.log('cart object:', data)
//   api.updateCart(data)
//     .then(ui.updateCartSuccess)
//     .catch(ui.updateCartFailure)
// }

const onUpdatePrint = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const idNum = $(event.target).attr('data-id')
  store.printId = idNum
  console.log('remove id num is ', idNum)
  console.log('remove cart object:', data)
  api.updatePrint(data)
    .then(ui.updatePrintSuccess)
    .catch(ui.updatePrintFailure)
}

// const onRemove = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const idNum = $(event.target).attr('data-id')
//   store.printId = idNum
//   console.log('remove id num is ', idNum)
//   console.log('remove cart object:', data)
//   api.removeItem(data)
//     .then(ui.removeItemSuccess)
//     .catch(ui.removeItemFailure)
// }

const onViewHistory = () => {
  event.preventDefault()
  console.log('getHistory button clicked')
  api.getHistory()
    .then(ui.getHistorySuccess)
    .catch(ui.getHistoryFailure)
}

const onIndexPrints = () => {
  event.preventDefault()
  console.log('index prints button clicked')
  api.indexPrints()
    .then(ui.indexPrintsSuccess)
      // .then(() => {
      //
      // })
    .catch(ui.indexPrintsFailure)
}

// const onViewCartHas = () => {
//   event.preventDefault()
//   console.log('cartHas button clicked')
//   api.getCartHas()
//     .then(ui.cartHasSuccess)
//     .catch(ui.cartHasFailure)
// }

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
  // $('.print-container').on('submit', onUpdateCart)
  $('.print-container').on('submit', onCreatePrint)
  $('.cart-button').on('click', onGetCart)
  $('.update-quantity').on('click', onUpdatePrint)
  // $('.remove').on('click', onRemove)
  $('.purcashed-button').on('click', onViewHistory)

  // index of all prints which belong to the user
  $('.cartHas-button').on('click', onIndexPrints)
  // $('.cartHas-button').on('click', onViewCartHas)
  // $('.cartHas-button').on('click', onViewCartHas)
  // stripe checkout
  $('#buttonCheckout').on('click', onCheckout)
}

module.exports = {
  addPrintHandlers
}
