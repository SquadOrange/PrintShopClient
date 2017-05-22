'use strict'
const store = require('../store.js')
// const api = require('./api.js')

const signUpSuccess = (data) => {
  console.log('sign up success')
}

const signUpFailure = () => {
  console.log('sign up failure')
}

// add shows where applicable
const signInSuccess = (data) => {
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
