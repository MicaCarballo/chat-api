const Participants = require('../models/participants.models')  

const findPartcipantsConversation = async (userId, conversation_id) =>{
 const data = await Participants.findOne({
where:{
    userId:userId,
    conversation_id:conversation_id
}
 })
return data
}
module.exports ={
    findPartcipantsConversation
}