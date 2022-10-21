import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    contactFirstName: String,
    contactLastName:String,
    contactNumber: Number,
    contactEmailAddress: String,
}, {
    timestamps: true,
    collection: "contactList",
});

export default mongoose.model('contactList', contactSchema);