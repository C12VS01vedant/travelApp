const express=require('express');

const router=express.Router();

const getAllHotelHandler=require('../controllers/hotelController');

// localhost:3500/api/hotels/hotelCategory
router.route('/').get(getAllHotelHandler);

module.exports=router;