const {MongoClient}=require('mongodb')
const mongoose = require('mongoose');

const ConnectDB= async()=>{
    try{
  
        const connect = await mongoose.connect(process.env.MONGO_URL)  
    }
    catch(error){
        console.log("======>",error);
        process.exit(1)
    }
}
module.exports = ConnectDB; 