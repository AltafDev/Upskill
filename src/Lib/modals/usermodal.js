
import mongoose from "mongoose";

const userschema=mongoose.Schema({
    clekid:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
       
    },
    firstname:{
        type:String,
        required:true,
       
    },
    lastname:{
        type:String,
        required:true,
      
    },
    username:{
        type:String,
        required:true,
        
    }
   },
{timestamps:true}
)
const User = mongoose.models.User || mongoose.model('User', userschema);

export default User;