const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    
    names:{type: String, required: true},
    lastnames:{type: String, required: true},
    email:{type: String, required: true},
    identificacion:{type: String, required: true},
    NumDocumento: {type: String, required: true},
    birthdate: {type: String, required: true},
    expeditiondate: {type: String, required: true},
    categoria: {type: String, required: true},
    picture: {type: String, required: true},
    
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('User', userSchema, 'users')