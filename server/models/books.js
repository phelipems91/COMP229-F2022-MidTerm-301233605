//Phelipe Matias da Silva - ID 301233605 - 10/22/2022

let mongoose = require('mongoose');

// create a book model
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
