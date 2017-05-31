'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  $('input').val('')
}

const signUpFailure = (response) => {
  $('.text-display').text('Error Signing Up')
  $('input').val('')
}

// add shows where applicable
const signInSuccess = (data) => {
  $('.text-display').text('Thanks for signing in. Enjoy!')
  $('.showAfterLogin').show()
  $('.hideAfterLogin').hide()
  $('input').val('')
  $('.cartHas-display').empty()

  // store the user object as per belows
  store.user = data.user
}

const signInFailure = () => {
  $('.text-display').text('Error Signing In')
  $('input').val('')
}

const changePasswordSuccess = (data) => {
  $('.text-display').text('Password Changed Succesfuly')
  $('input').val('')
}

const changePasswordFailure = () => {
  $('.text-display').text('Error Changing Password')
  $('input').val('')
}

const signOutSuccess = (data) => {
  $('.text-display').text('Thanks for shopping. Come back soon!')
  $('.hideBeforeLogin').hide()
  $('.hideAfterLogin').show()
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = () => {
  $('.text-display').text('Failure Signing Out')
}

const emptyCartSuccess = (data) => {
  store.buyerId = data.buyer._id
}

const emptyCartFailure = (response) => {
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  emptyCartFailure,
  emptyCartSuccess
}
