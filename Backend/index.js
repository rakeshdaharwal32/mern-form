const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const User = require("./schema");


mongoose.connect("mongodb://127.0.0.1:27017/cricket").then(() => {
    console.log("database connected")
})


app.post("/", (req, res) => {
    const { data } = User.create(req.body);
    res.send(data)
});

app.get("/", (req, res) => {
    
    res.send("hello")
});


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});

