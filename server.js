import express from "express";
import router from "./routs/rout.js";
import "dotenv/config";

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
