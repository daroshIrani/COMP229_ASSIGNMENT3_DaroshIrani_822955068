// Author : Darosh Irani
// Student ID : 822955068
// Filename : user.js
// Dated : October 22nd, 2022

// Importing the mongoose module
import mongoose from "mongoose";

// importing the passprt local mogoose module
import passportLocalMongoose from 'passport-local-mongoose';
const { PassportLocalSchema } = mongoose;

// instantating the Schema object from mongoose.schema
const Schema = mongoose.Schema;

// creating a new user Schema  using the shcema object
const UserSchema = new Schema({
    displayName:String,
    username: String,
    emailAddress: String
},{
    timestamps:true,
    collection: 'users'
});

// using the passport Local mongoose functionality via a plugin for user schema
UserSchema.plugin(passportLocalMongoose);

// exporrting the user schema to be used later
export default mongoose.model('User', UserSchema);