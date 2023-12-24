const express = require('express');
const category = require('../model/category.model');
const categories = require('../data/categories');

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        await category.deleteMany(); // Use deleteMany instead of remove
        const categoriesInDB = await category.insertMany(categories.data);
        res.json(categoriesInDB);
    } catch (err) {
        console.log(err);
        res.json({ message: 'Could not add categories to the database' });
    }
});

module.exports = router;