const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors");
require('dotenv').config()
var path = require('path');

const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..')));

const PORT = process.env.PORT || 3010;
var server = app.listen(PORT, () => {
    console.log(`server running on port 3010`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const userCorrect = "ejemplo";
const passwordCorrect = "12345678";


app.post("/login", async (req, res) => {
    //console.log("login");
    if(req.body.user == userCorrect && req.body.password == passwordCorrect){
        //console.log("true");
        res.send({data: true});
    }else{
        //console.log("false");
        res.send({data: false});
    }
});