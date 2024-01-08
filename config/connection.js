const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connection(){
        const url = process.env.mongo_url;
        const connect = await mongoose.connect(url);
        if(!connect){
            next("Mongo is not connected");
        }
        console.log(`connected to mongodb database ${mongoose.connection.host}`);
}


module.exports = {connection}