const messagesControllers = require('./messages.controller')

const postMessage = (req,res)=>{

const userId = req.user.id 
const conversationId = req.params.conversation_id 
const {message}= req.body 

messagesControllers.createMessage({
    userId,
    conversationId,
    message
})
.then(data =>{
res.status(201).json(data)
})
.catch(err => {res.status(400).json({message: err.message})
})
}

const getAllMessages = (req,res)=>{
    const conversationId = req.params.conversation_id 
    const messageId = req.params.message_id
    messagesControllers.findAllMessages(conversationId,messageId)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const getMessageById = (req,res)=>{
    const messageId = req.params.message_id
   
    messagesControllers.findMesageById(messageId)
        .then(data=>{
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({message: 'id ${messageId} is invalid'})
            }
        })
        .catch(error=>res.status(400).json({message:error.message}))
}

const deleteMessageById = (req,res)=>{
    const messageId = req.params.message_id
    messageControllers.destroyMessageById(messageId)
        .then(data=>{
            if(data){
                res.status(204).json()
            }else{
                res.status(404).json({message: 'id ${messageId} is invalid'})
            }
        })
        .catch(error=>res.status(400).json({message:error.message}))
}

module.exports ={
    postMessage,
    getAllMessages,
    getMessageById,
    deleteMessageById
}