const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./database/config/db");
const productRouter = require("./routes/productRouter");


app.use(express.json());


app.post("/",productRouter)
app.get("/",productRouter)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
