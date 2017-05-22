'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('sign up success')
  console.log(data)
}

const signUpFailure = (response) => {
  console.log('sign up failure')
}

// add shows where applicable
const signInSuccess = (data) => {
  console.log(data)
  console.log('sign in success')

  // store the user object as per below
  store.user = data.user
}

const signInFailure = () => {
  console.log('sign in failure')
}

const changePasswordSuccess = (data) => {
  console.log('password change success')
}

const changePasswordFailure = () => {
  console.log('password change failure')
}

const signOutSuccess = (data) => {
  console.log('Sign out success')
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = () => {
  console.log('Sign out failure')
}

const emptyCartSuccess = (data) => {
  console.log('cart update success')
  console.log('cart UI:', data)
}

const emptyCartFailure = (response) => {
  console.log('cart update failure')
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
