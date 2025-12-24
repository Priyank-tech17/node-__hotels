const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");


// ================= POST METHOD =================
// Add new menu item
router.post("/", async (req, res) => {
    try {
        const data = req.body;

        const newMenu = new Menu(data);
        const response = await newMenu.save();

        console.log("menu item saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});


// ================= GET METHOD =================
// Get all menu items
router.get("/", async (req, res) => {
    try {
        const data = await Menu.find();
        console.log("menu fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});


// ================= FIND BY CATEGORY =================
router.get("/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const data = await Menu.find({ category });

        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});


// ================= FIND BY PRICE =================
router.get("/price/:price", async (req, res) => {
    try {
        const { price } = req.params;
        const data = await Menu.find({ price });

        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
