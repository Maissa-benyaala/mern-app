const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    img: String,
    rate: {type :Number, default:0},
    details: String
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;
