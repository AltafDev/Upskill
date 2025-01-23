import { Database } from "../Database/DB";
import User from "../modals/usermodal";

export const CreateOrUpdaateUser =async(id,first_name,last_name,email_addresses,username)=>{
    try {
        await Database()
        const user= User.findOneAndUpdate(
            {clekid,id},
           {
            $set:{
                firstname:first_name,
                lastname:last_name,
                username:username,
                email:email_addresses[0].email_address
            }
           },
           {new:true,upsert:true}
        )
        return user
    } catch (error) {
        console.log(error)
    }
}
export const DeletUser=async(id)=>{
    try {
        await Database()
    await User.findOneAndDelete({clerkid:id})
    } catch (error) {
        console.log(error)
    }
}