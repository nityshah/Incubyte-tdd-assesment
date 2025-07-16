const sweet = require('../models/sweet');


class sweetshop {
    constructor() {
        this.sweets = {}
    }

    // add sweets logic
    addSweet(id, name, category, price, quantity) {
        if (!id || !name || !category) {
            throw new Error("ID, Name, and Category are required");
        }
        if (this.sweets[id]) {
            throw new Error("Sweet already exists");
        }

        this.sweets[id] = new sweet(id, name, category, price, quantity);
    }

    //delete sweets logic
    deleteSweet(id) {
        if (!this.sweets[id]) throw new Error(`Sweet with ID ${id} not found`);
        delete this.sweets[id];
    }
}
module.exports = sweetshop;