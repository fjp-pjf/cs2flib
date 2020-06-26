const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',{useNewUrlParser:true});
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    email : String,
    password : String,
    address1 : String,
    address2 : String,
    number : String,
    city : String,
    zip : String,
    gender : String,
    dob : String,
    usertype:String
});

var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata;