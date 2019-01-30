'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess) 
    .catch(ui.signUpFailure) 
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess) 
    .catch(ui.signInFailure) 
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess) 
    .catch(ui.signOutFailure) 
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess) 
    .catch(ui.changePasswordFailure) 
}

const onBucketListCreate = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.bucketListCreate(data)
    .then(ui.bucketListCreateSuccess)
    .catch(ui.bucketListCreateFailure)
}

const onBucketListUpdate = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.bucketListUpdate(data, data.bucketList.id)
    .then(ui.bucketListUpdateSuccess) 
    .catch(ui.bucketListUpdateFailure) 
}

const onBucketListIndex = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.bucketListIndex(data)
    .then(ui.bucketListIndexSuccess) 
    .catch(ui.bucketListIndexFailure) 
}

const onBucketListDelete = event => {
  event.preventDefault()
  const data = $('#delete-task').val()
  api.bucketListDelete(data)
    .then(ui.bucketListDeleteSuccess) 
    .catch(ui.bucketListDeleteFailure) 
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onBucketListDelete,
  onBucketListIndex,
  onBucketListUpdate,
  onBucketListCreate
}
