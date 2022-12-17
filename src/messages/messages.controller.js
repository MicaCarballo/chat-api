const Messages = require('../models/messages.models')
const uuid = require('uuid')

const createMessage = async (obj) => {
    const data = await Messages.create({
        id: uuid.v4(),
        userId : obj.userId,
        conversationId: obj.conversationId,
        message: obj.message
    })
    return data
}

const findAllMessages = async (conversationId) =>{
const data = await Messages.findAll({
    where :{
       conversationId:conversationId 
    }

})
return data
}

const findMesageById = async (id,conversationId) => {
    const data = await Messages.findOne({
        where: {
            id: id,
            
        }
    })
    return data
}

const removeMesageById = async (id) => {
    const data = await Messages.destroy({
        where: {
            id: id,
            
        }
    })
    return data
}

module.exports = {
    createMessage,
    findAllMessages,
    findMesageById,
    removeMesageById
}