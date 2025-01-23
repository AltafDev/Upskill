import mongoose from "mongoose"
let intialized=false

export const Database =async()=>{
    mongoose.set("strictQuery",true)
    if(intialized){
        console.log("Database is already conected")
        return
    }
    try {
        await mongoose.connect(process.env.Mongodb_URL,{
            dbName: 'altafkhan1743',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
       
        console.log("Database is connected")
    } catch (error) {
        console.log("Database is not connected")
    }
}