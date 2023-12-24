const express=require('express');
const mongoose=require('mongoose');

const dotnev=require('dotenv');
dotnev.config();

const categoryRouter = require("./routes/category.router");
const hotelRouter=require('./routes/hotel.router');
const singleHotelRouter=require('./routes/singlehotel.router');
const authRouter=require('./routes/auth.router');
const wishlistRouter=require('./routes/whislist.router');

const connectDB=require('./config/dbconfig');

const hotelDataAddedToDBRouter=require('./routes/dataimport.router');
const categoryDataAddedToDBRouter=require('./routes/categoryimport.router');

const app=express();

const PORT=3500;

app.use(express.json());
connectDB();
app.get('/',(req,res)=>{
    res.send('Hi')
});

app.use('/api/hotels',hotelRouter);
app.use("/api/category", categoryRouter);
app.use('/api/hoteldata',hotelDataAddedToDBRouter);
app.use('/api/categorydata',categoryDataAddedToDBRouter);
app.use('/api/hotels',singleHotelRouter);
app.use('/api/auth',authRouter);
app.use('/api/wishlist',wishlistRouter);



mongoose.connection.once('open',()=>{
    console.log('\n\nDB Connected');
    app.listen(process.env.PORT || PORT ,()=>{
        console.log('Server is UP and Running')
    });
    
})


