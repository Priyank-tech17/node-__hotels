const mongoose = require("mongoose");

const menuschema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true,
        enum: ["Starter", "Main Course", "Dessert", "Beverage"]
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String
    },

    isAvailable: {
        type: Boolean,
        default: true
    },

    isVeg: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

const Menu = mongoose.model("Menu", menuschema);

module.exports = Menu;
