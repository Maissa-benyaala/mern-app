const express = require('express');
const recipeRouter = express.Router();

const Recipe = require('../models/recipeModel')

// --- POST --- //

 recipeRouter.post('/add', async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        const result = await newRecipe.save();
    	res.send({recipe:result,msg:"Recipe added successfully "});
	} catch (error) {
    	console.log(error)
    }
})

// --- GET ALL --- //

recipeRouter.get('/', async (req, res) => {
    try {
        const result = await Recipe.find();
        res.status(200).send({recipes:result, msg:"Here are all the recipes !"})
    } catch (error) {
        console.log(error)
    }
})

// --- GET BY ID --- //

recipeRouter.get("/:id", async (req, res) => {
	try {
		const result = await Recipe.findById({ _id: req.params.id })
		res.status(200).send({recipe:result, msg:"Here is the recipe !"} )
    } catch (error) {
        console.log(error)
    }
})

// --- UPDATE ONE BY ID --- //

recipeRouter.put("/:id", async (req, res) => {
	try {
		const result = await Recipe.findByIdAndUpdate({ _id: req.params.id }, {$set: {...req.body}})
		res.status(200).send({msg:"Recipe updated successfully !"})
    } catch (error) {
        console.log(error)
    }
})

// --- DELETE ONE BY ID --- //

recipeRouter.delete("/:id", async (req, res) => {
	try {
		const recipe = await Recipe.findByIdAndDelete({ _id: req.params.id })
        res.status(204).send({msg: "Recipe deleted successfully !"})
    } catch (error) {
        console.log(error)
    }
})

module.exports = recipeRouter;