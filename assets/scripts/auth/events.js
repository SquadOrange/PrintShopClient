'use strict'
// requiring the necesary files...
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const printAPI = require('../printAPI/api')
const printUI = require('../printAPI/ui')

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
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('.sign-out-button').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
