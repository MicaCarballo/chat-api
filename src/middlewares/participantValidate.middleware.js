const {findPartcipantsConversation} = require('../participants/participant.controller')

const participantValidate = (req,res,next)=>{
    const conversationId = req.params.conversation_id
    const userId = req.user.id

    findPartcipantsConversation(userId, conversationId)
    .then(data =>{
        if(data){
            next()
        }else{
            res.status(400).json({message:'you arent a participant in this conversation'})
        }

    })
    .catch(err =>{
        res.status(400).json({message:err.message})
    })
} 

module.exports = {
    participantValidate
}