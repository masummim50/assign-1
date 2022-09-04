const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/', (req, res)=> {
    res.send("server running");
})


app.listen(PORT, ()=> {
    console.log("running")
})