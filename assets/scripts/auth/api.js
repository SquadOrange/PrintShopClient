'use strict'
const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const makeEmptyCart = () => {
  console.log('update cart ajax is sent:')
  return $.ajax({
    url: config.apiOrigin + '/buyers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'buyer': {
        'cart': [{
          'title': 'void',
          'quantity': 0,
          'idNum': 9,
          'purchased': 'true'
        }]
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  makeEmptyCart
}
