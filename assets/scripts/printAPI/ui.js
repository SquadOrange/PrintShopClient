'use strict'
const store = require('../store.js')
const showPrintsTemplate = require('../templates/index-prints.handlebars')
const showPurchaseTemplate = require('../templates/index-purchases.handlebars')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields')

const indexPrintsSuccess = (response) => {
  store.indexOfPrints = response
  if (response.prints.length === 0) {
    $('.cartHas-display').html("Don't forget to add some prints!")
    calculateTotalCost()
  } else {
    const indexPrintsHtml = showPrintsTemplate({
      prints: response.prints
    })
    $('.cartHas-display').html(indexPrintsHtml)
    $('.remove-print-button').on('click', removePrint)
    $('.update-print-button').on('submit', updatePrint)
    console.log('index successful:', response)
    calculateTotalCost()
  }
}

const calculateTotalCost = (response) => {
  const printArray = store.indexOfPrints.prints
  const totalQuantity = printArray.reduce(function (a, b) { return a + b.quantity }, 0)
  store.totalCost = totalQuantity * 100
  console.log(totalQuantity * 100)
  $('.total-cost-display').text('Subtotal is: $' + store.totalCost)
}

const indexPrintsFailure = (response) => {
  $('.cartHas-display').text(response)
}

const removePrint = (event) => {
  event.preventDefault()
  const findId = $(event.target).attr('data-id')
  console.log('removePrint event target is: ', event.target)
  api.removeById(findId)
    .then(removePrintSuccess(event.target))
    .then(() => {
      api.indexPrints()
        .then(indexPrintsSuccess)
        .catch(indexPrintsFailure)
    })
    .catch(removeprintFailure)
}

const updatePrint = (event) => {
  event.preventDefault()
  const findId = $(event.target).attr('data-id')
  const data = getFormFields(event.target)
  api.updateById(findId, data)
    .then(updatePrintSuccess)
    .then(() => {
      api.indexPrints()
        .then(indexPrintsSuccess)
        .catch(indexPrintsFailure)
    })
    .catch(updatePrintFailure)
}

const updatePrintSuccess = (response) => {
  $('.text-display').html('Quantity updated')
}
const updatePrintFailure = (response) => {
  $('.text-display').html('Error updating quantity')
}

const removePrintSuccess = (target) => {
  $('.text-display').html('Prints removed')
  $('.create-print-message').detach()
  if ($('.create-print-failure').length) {
    $('.create-print-failure').detach()
  }
}
const removeprintFailure = (response) => {
  $('.text-display').html('Error removing print')
}

const showOrderSuccess = (data) => {
  console.log('got the history')
  console.log('order history data is ', data)
  debugger
  const indexPurchaseHtml = showPurchaseTemplate({
    order: data
  })
  $('.purchase-display').html(indexPurchaseHtml)
}

const showOrderFailure = (response) => {
  $('.purchase-display').text('no purchase history to display')
}

const createPrintSuccess = (target) => {
  if ($('.create-print-failure').length) {
    $('.create-print-failure').detach()
  }
  $('<div class="create-print-message"><p>Successfully added to cart!</p></div>').appendTo(target)
}

const createPrintFailure = (target) => {
  if ($('.create-print-message').length) {
    $('.create-print-message').detach()
  }
  $('<div class="create-print-failure"><p>Sorry, please choose a valid quantity.</p><div>').appendTo(target)
}

const alreadyInCart = (target) => {
  if ($('.create-print-message').length) {
    $('.create-print-message').detach()
  }
  $('<div class="create-print-failure"><p>Sorry, that print is already in the cart.</p><div>').appendTo(target)
}

const tokenSuccess = (data) => {
  console.log('sucess data is: ', data)
  // $('.purchaseConfirm').text('you have successfully paid')
}

const tokenFailure = (response) => {
  console.log('removal failure')
  $('.purchaseConfirm').text('unable to process purchase')
}

const changeStatusSuccess = (data) => {
  console.log('change status success', data)
}

const changeStatusFailure = (response) => {
  console.log('change status failure')
}

module.exports = {
  showOrderFailure,
  showOrderSuccess,
  tokenSuccess,
  tokenFailure,
  createPrintFailure,
  createPrintSuccess,
  alreadyInCart,
  indexPrintsFailure,
  indexPrintsSuccess,
  removePrint,
  calculateTotalCost,
  changeStatusFailure,
  changeStatusSuccess
}
