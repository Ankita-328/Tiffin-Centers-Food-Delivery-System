import mongoose from "mongoose";

const tiffinSchema = new mongoose.Schema({
    name : {type:String,required:true},
    address: {type:String,required:true},
    phone: {type:Number,required:true}
})

const tiffinModel = mongoose.models.tiffin || mongoose.model("tiffin",tiffinSchema)

export default tiffinModel