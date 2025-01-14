import tiffinModel from "../models/tiffinModel.js";

const addTiffin = async (req,res) => {
    const tiffin =new tiffinModel({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone
    })
    try {
        await tiffin.save();
        res.json({success:true,message:"tiffin Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:'Error in saving tiffin'})
    }
}

//all tiffin list
const listTiffin = async (req,res) => {
    try {
        const tiffin = await tiffinModel.find({})
        res.json({success:true,data:tiffin}) 
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//remove food item

const removeTiffin = async(req,res) => {
    try {
        await tiffinModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Tiffin removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error in removing"})
    }
}

export{addTiffin,removeTiffin,listTiffin}