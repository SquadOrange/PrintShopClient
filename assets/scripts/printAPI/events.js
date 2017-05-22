'use strict'
// requiring the necesary files...
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

// const onMakeEmptyCart = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const idNum = $(event.target).attr('data-id')
//   store.printId = idNum
//   console.log('id num:', idNum)
//   console.log('cart object:', data)
//   api.makeEmptyCart(data)
//     .then(ui.emptyCartSuccess)
//     .catch(ui.emptyCartFailure)
// }

const onMakeEmptyCart = function () {
  const data = getFormFields(event.target)
  const idNum = $(event.target).attr('data-id')
  store.printId = idNum
  console.log('id num:', idNum)
  console.log('cart object:', data)
  api.makeEmptyCart()
    .then(ui.emptyCartSuccess)
    .catch(ui.emptyCartFailure)
}

const addPrintHandlers = () => {
  $('.print').on('submit', onMakeEmptyCart)
}

module.exports = {
  addPrintHandlers
}
