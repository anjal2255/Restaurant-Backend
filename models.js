const mongoose= require("mongoose")

mongoose.connect("mongodb")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))
let mongoSchema=mongoose.Schema
const FoodSchema= new mongoSchema({
    fname:String,
    fprice:Number
   
})
var Food=mongoose.model("Food",FoodSchema)
module.exports=Food
