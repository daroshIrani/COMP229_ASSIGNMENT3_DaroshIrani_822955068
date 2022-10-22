// Author : Darosh Irani
// Student ID : 822955068
// Filename : contacts.js
// Dated : October 22nd, 2022

// Importing the mongoose module
import mongoose from "mongoose";

// Creation of the schema object from mogoose module
const Schema = mongoose.Schema;

// Creation of the new schema for contacts 
const contactSchema = new Schema({
    contactFirstName: String,
    contactLastName:String,
    contactNumber: Number,
    contactEmailAddress: String,
}, {
    timestamps: true,
    collection: "contactList",
});

//Exporting the Schema to be used whenever needed
export default mongoose.model('contactList', contactSchema);