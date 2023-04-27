const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
    fullName: String,
    email: { type: String, Unique: true },
    password: String,
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel