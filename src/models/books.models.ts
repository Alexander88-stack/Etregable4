//const mongoose = require('mongoose');
import mongoose from "mongoose";


const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    author: String,
    description: String
});

const bookModel = mongoose.model('Book', BooksSchema);

export default bookModel;


