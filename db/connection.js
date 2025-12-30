import mongoose from 'mongoose';
import 'dotenv/config'
const dbName = process.env.DB_NAME
const uri = process.env.MONGO_URI

// let db;

export async function connecdMongoDb(){
    try{
        await mongoose.connect(uri)
        console.log("connect successfully");
        // let mongoose.db()
        return true;
    }catch(error){
        console.error(`error: ${error}`)
        return false;
    }


    // const client = new MongoClient(uri);
    // // if(db) return db
    // await client.connect();
    // let db =  client.db(dbName);
    // // const collection = await  db.collection("books")
    // console.log("mongoDB connected:", db.databaseName);
    // return db
}