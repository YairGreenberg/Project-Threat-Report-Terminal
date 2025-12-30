import mongoose from "mongoose";
import { connecdMongoDb } from "../db/connection.js";
import express from "express";
const router = express();

const db = await connecdMongoDb();

router.post("/insert", async (req, res) => {
  try {
    const { name, age } = req.body;
    if (!name || !age) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Missing credentials" });
    }
    const book = await UserNodel.create({name,age})
 
    res.status(200).json({ msg: "Added successfully" });
  } catch (error) {
    console.error(`Error adding agent: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const user = new mongoose.Schema({
    name:String,
    age:Number,
});

const UserNodel = mongoose.model("books",user);

router.get("/getBooks",async (req,res)=>{
    const data = await UserNodel.find();
    res.json(data)
})








export default router;
