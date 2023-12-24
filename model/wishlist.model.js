const mongoose=require('mongoose');

const wishlistSchema=new mongoose.Schema({
    hotelId:{type:String,required:true},
})

const wishlist=mongoose.model('whislist',wishlistSchema);

module.exports=wishlist;