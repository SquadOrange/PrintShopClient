'use strict'
// requiring the necesary files...
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const printAPI = require('../printAPI/api')
const printUI = require('../printAPI/ui')
const uxEvents = require('../userexperience/main.js')

// chains sign in to allow auto-sign in functionality
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => {
      api.signIn(data)
        .then(ui.signInSuccess)
        .then(() => {
          printAPI.indexPrints()
          .then(printUI.indexPrintsSuccess)
          .catch(printUI.indexPrintsFailure)
        })
        // .then(() => {
        //   printAPI.showOrder()
        //     .then(printUI.showOrderSuccess)
        //     .catch(printUI.showOrderFailure)
        // })
        .catch(ui.signInFailure)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(() => {
      printAPI.indexPrints()
      .then(printUI.indexPrintsSuccess)
      .catch(printUI.indexPrintsFailure)
    })
    .then(() => {
      printAPI.showOrder()
        .then(printUI.showOrderSuccess)
        .catch(printUI.showOrderFailure)
    })
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#register').on('click', function () {
    uxEvents.signUpAppear()
    if ($('#sign-in').not('hidden')) {
      $('#sign-in').addClass('hidden')
    }
  })
  $('#log-in').on('click', function () {
    uxEvents.signInAppear()
    if ($('#sign-up').not('hidden')) {
      $('#sign-up').addClass('hidden')
    }
  })
  $('#change-pwd').on('click', function () {
    uxEvents.changePasswordAppear()
    if (!$('.change-pwd-error').hasClass('hidden')) {
      $('.change-pwd-error').addClass('hidden')
    }
    if (!$('.change-pwd-success').hasClass('hidden')) {
      $('.change-pwd-success').addClass('hidden')
    }
  })
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
