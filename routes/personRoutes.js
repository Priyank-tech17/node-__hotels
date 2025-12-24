const express = require("express");
const router = express.Router();
const person = require("../models/person");




// POST method
router.post("/", async (req, res) => {
    try {
        const data = req.body;

        const newPerson = new person(data);

        const response = await newPerson.save();
        console.log("data saved")
        res.status(200).json(response);
    }

    catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})



//GET method
//RETURN ALL THE DATA STORED IN DATABASE"
router.get("/", async (req, res) => {
    try {
        const data = await person.find();
        console.log("data is fetched")
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }

});






// FIND THE DATA BY USING "NAME"
router.get("/:name", async (req, res) => {
    try {
        const { name } = req.params
        const data = await person.find({ name });
        console.log("data is fetched")
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }

});




// FIND THE DATA BY USING "salary"
router.get("/salary/:salary", async (req, res) => {
    try {
        const { salary } = req.params
        const data = await person.find({ salary });
        console.log("data is fetched")
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }

});



module.exports = router;