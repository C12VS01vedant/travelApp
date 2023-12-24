const express = require('express');
const hotel = require('../model/hotel.model');
const hotels = require('../data/hotels');

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        await hotel.deleteMany(); // Use deleteMany instead of remove
        const hotelsInDB = await hotel.insertMany(hotels.data);
        res.json(hotelsInDB);
    } catch (err) {
        console.log(err);
        res.json({ message: 'Could not add data to the database' });
    }
});

module.exports = router;
