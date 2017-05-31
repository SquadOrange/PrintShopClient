'use strict'
const store = require('../store.js')
const showPrintsTemplate = require('../templates/index-prints.handlebars')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields')

const indexPrintsSuccess = (response) => {
  store.indexOfPrints = response
  if (response.prints.length === 0) {
    $('.cartHas-display').html("Don't forget to add some prints!")
  } else {
    const indexPrintsHtml = showPrintsTemplate({
      prints: response.prints
    })
    $('.cartHas-display').html(indexPrintsHtml)
    $('.remove-print-button').on('click', removePrint)
    $('.update-print-button').on('submit', updatePrint)
  }
}

const indexPrintsFailure = (response) => {
  $('.cartHas-display').text(response)
}

const removePrint = (event) => {
  event.preventDefault()
  const findId = $(event.target).attr('data-id')
  api.removeById(findId)
    .then(removePrintSuccess)
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
  console.log('Prints removed')
}
const updatePrintFailure = (response) => {
  console.log('error removing print')
}

const removePrintSuccess = (response) => {
  console.log('Prints updated by quantity', response)
}
const removeprintFailure = (response) => {
  console.log('error updating print')
}

// const getHistorySuccess = (data) => {
//   console.log('got the history')
//   if (data.buyers[0].alreadyPurchased.length === 0) {
//     $('.purchase-display').text("You haven't bought anything yet")
//   } else {
//     console.log('the cart has ', data.buyers[0].alreadyPurchased)
//     $('.purchase-display').text('Items you have purchased: ' + printHistory(data))
//   }
// }

const getHistoryFailure = (response) => {
  $('.purchase-display').text('no purchase history to display')
}

const createPrintSuccess = (target) => {
  console.log('In create success, create print target:', target)
  $('<p>Successfully added to cart!</p>').appendTo(target)
}

const createPrintFailure = (target) => {
  console.log('print create failure', target)
  console.log('cannot add zero prints, please select a valid quantity')
  $('.text-display').text('Cannot add zero prints, please select a valid quantity')
  $('<p>Cannot add zero prints, please select a valid quantity</p>').appendTo(target)
}

const tokenSuccess = (data) => {
  console.log('sucess', data)
  $('.purchaseConfirm').text('you have successfully paid')
}

const tokenFailure = (response) => {
  console.log('removal failure')
  $('.purchaseConfirm').text('unable to process purchase')
}

module.exports = {
  getHistoryFailure,
  // getHistorySuccess,
  tokenSuccess,
  tokenFailure,
  createPrintFailure,
  createPrintSuccess,
  indexPrintsFailure,
  indexPrintsSuccess,
  removePrint
}
