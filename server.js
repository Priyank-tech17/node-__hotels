const express = require("express")
const app = express();
const db = require("./db")




const bodyparser = require("body-parser");
app.use(bodyparser.json());


app.get("/", (req, res) => {
    res.send("hello sir");
});



//import the personroutes file

const personroutes = require("./routes/personRoutes");
//use routes
app.use("/person", personroutes);


//import the menuroutes file

//import the personroutes file

const menuroutes = require("./routes/menuRoutes");
//use routes
app.use("/menu", menuroutes);


app.listen(3000, () => {
    console.log("listening on port 3000");
})