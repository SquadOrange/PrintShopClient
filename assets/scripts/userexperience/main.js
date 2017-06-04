'use strict'

const signUpAppear = function () {
  $('#sign-up').removeClass('hidden')
}

const signInAppear = function () {
  $('#sign-in').removeClass('hidden')
}

const changePasswordAppear = function () {
  $('#change-password').removeClass('hidden')
}

module.exports = {
  signUpAppear,
  signInAppear,
  changePasswordAppear
}
