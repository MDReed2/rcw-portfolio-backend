// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Suggestion = require('../models/suggestions')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /suggestions
router.get('/suggestions', requireToken, (req, res, next) => {
  Suggestion.find()
    // respond with status 200 and JSON of the examples
    .then(suggestions => res.status(200).json({ suggestions: suggestions }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /suggestions/5a7db6c74d55bc51bdf39793
router.get('/suggestions/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Suggestion.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "suggestion" JSON
    .then(suggestion => res.status(200).json({ suggestion: suggestion }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /suggestions
router.post('/suggestions', requireToken, (req, res, next) => {
  // set owner of new suggestion to be current user
  req.body.suggestion.owner = req.user.id

  Suggestion.create(req.body.suggestion)
    // respond to successful `create` with status 201 and JSON of new "suggestion"
    .then(suggestion => {
      res.status(201).json({ suggestion: suggestion.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /suggestions/5a7db6c74d55bc51bdf39793
router.patch('/suggestions/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.suggestion.owner

  Suggestion.findById(req.params.id)
    .then(handle404)
    // ensure the signed in user (req.user.id) is the same as the suggestion's owner (suggestion.owner)
    .then(suggestion => requireOwnership(req, suggestion))
    // updating suggestion object with suggestion
    .then(suggestion => suggestion.updateOne(req.body.suggestion))
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /suggestions/5a7db6c74d55bc51bdf39793
router.delete('/suggestions/:id', requireToken, (req, res, next) => {
  Suggestion.findById(req.params.id)
    .then(handle404)
     // ensure the signed in user (req.user.id) is the same as the suggestion's owner (suggestion.owner)
    .then(suggestion => requireOwnership(req, suggestion))
    // delete suggestion from mongodb
    .then(suggestion => suggestion.deleteOne())
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
