const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const WriterSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});

var Writerdata = mongoose.model('writerdata',WriterSchema);

module.exports = Writerdata;