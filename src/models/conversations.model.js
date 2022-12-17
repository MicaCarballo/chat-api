
const Users = require('./users.models');
const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Conversations = db.define('conversations',{
    id: {
        type:DataTypes.UUID,
        primaryKey:true
    },
    title : {
        type: DataTypes.STRING,
        allowNull:false

    },
    imageUrl:{ // siempre van en camelCase, nombre de tabla en singular mas id
        type: DataTypes.STRING
    },
    userId :{
        type: DataTypes.UUID,
        allowNull:false,
        references:{
            key:'id',
            model: Users
        }
    }
})

module.exports = Conversations;