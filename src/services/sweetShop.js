const sweet = require('../models/sweet');


class sweetshop {
    constructor() {
        this.sweets = {}
    }

    addSweet(id, name, category, price, quantity) {
        if (!id || !name || !category) {
            throw new Error("ID, Name, and Category are required");
        }
        if (this.sweets[id]) {
            throw new Error("Sweet already exists");
        }

        this.sweets[id] = new sweet(id, name, category, price, quantity);
    }
}
module.exports = sweetshop;