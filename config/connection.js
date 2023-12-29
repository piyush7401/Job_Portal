const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connection(){
    try{
        const url = process.env.mogo_url;
        const connect = await mongoose.connect(mogo_url);
        console.log(`connected to mongodb database ${mongoose.connection.host}`);
    }catch{
        console.log(`MongoDb connection erro ${error}`);
    }
}


module.exports = {connection}