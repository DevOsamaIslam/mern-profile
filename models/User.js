import mongoose from "mongoose";

const schema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	initials: String,
	city: String,
	email: String,
	phone: String,
	profession: String
})

schema.pre('save', function(){
	this.initials = this.firstName[0] + this.lastName[0]
})

export default mongoose.model('User', schema)