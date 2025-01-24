
import mongoose from "mongoose";

const userschema=mongoose.Schema({
    clekid:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    firstname:{
        type:String,
        required:true,
        unique:true
    },
    lastname:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    }
   },
{timeStamps:true}
)
const User = mongoose.models.User || mongoose.model('Upskill', userschema);
export default User