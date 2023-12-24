const category = require("../model/category.model");

const categoryHandler=async (req,res)=>{
        
    try{
      const categories=await category.find({});
      res.json(categories);
        }
    catch(err){
        res.status(404).json({message:'could not found categories'})
    }
}
module.exports=categoryHandler;