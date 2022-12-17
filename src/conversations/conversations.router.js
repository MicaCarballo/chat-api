const router = require('express').Router()
const conversationServices = require('./conversations.services')
const passportJWT = require('../middlewares/auth.middleware')
const participantValidate = require('../middlewares/participantValidate.middleware')
const messageServices = require('../messages/messages.services')

router.route('/')
    .get(passportJWT.authenticate('jwt', {session: false}), conversationServices.getAllConversations)
    .post(passportJWT.authenticate('jwt', {session: false}), conversationServices.postConversation)

    router.route('/:conversation_id')
    .get(passportJWT.authenticate('jwt', {session: false}), conversationServices.getConversationById)
    .patch(passportJWT.authenticate('jwt', {session: false}), conversationServices.patchConversation)
    .delete(passportJWT.authenticate('jwt', {session: false}), conversationServices.deleteConvesation)

router.route('/:conversation_id/messages')
.post(passportJWT.authenticate('jwt', {session:false}, participantValidate, messageServices.postMessage))
.get(passportJWT.authenticate('jwt', {session: false},participantValidate, messageServices.getAllMessages))

router.route('/:conversation_id/messages/:message_id')
.get(passportJWT.authenticate('jwt', {session:false}, participantValidate, messageServices.getMessageById))
.delete(passportJWT.authenticate('jwt', {session:false}, participantValidate, messageServices.deleteMessageById))



    module.exports = router


