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
  $('input').val('')
  $('.cartHas-display').empty()
  $('.purchase-display').empty()
  $('.sign-in-area').addClass('hidden')
  $('#change-pwd').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('.purchaseConfirm').text('')
  $('.cartHas-display').hide()
  $('.purchase-display').hide()
  document.getElementById('sign-in').reset()

  // store the user object as per belows
  store.user = data.user
}

const signInFailure = () => {
  $('.text-display').text('Error Signing In')
  $('input').val('')
}

const changePasswordSuccess = (data) => {
  $('.text-display').text('Password Changed Successfully').fadeIn().delay(2000).fadeOut('slow')
  $('#change-password').addClass('hidden')
  document.getElementById('change-password').reset()
  $('input').val('')
}

const changePasswordFailure = () => {
  $('.text-display').text('Error Changing Password').fadeIn().delay(2000).fadeOut('slow')
  document.getElementById('change-password').reset()
  $('input').val('')
}

const signOutSuccess = (data) => {
  $('.text-display').text('Thanks for shopping. Come back soon!')
  $('.text-display').show()
  $('.hideBeforeLogin').hide()
  $('.sign-in-area').removeClass('hidden')
  $('#log-in').removeClass('hidden')
  $('#register').removeClass('hidden')
  $('#change-pwd').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  if (!$('#sign-in').hasClass('hidden')) {
    $('#sign-in').addClass('hidden')
  }
  if (!$('#sign-up').hasClass('hidden')) {
    $('#sign-up').addClass('hidden')
  }
  if (!$('.change-pwd-success').hasClass('hidden')) {
    $('.change-pwd-success').addClass('hidden')
  }
  if (!$('.change-pwd-error').hasClass('hidden')) {
    $('.change-pwd-error').addClass('hidden')
  }
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = (response) => {
  $('.text-display').text('Sorry, unable to sign out.')
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
