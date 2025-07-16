const sweet = require('../models/sweet');


class SweetShop {
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




    //purchase sweets logic
    purchaseSweet(id, quantity) {
        const sweet = this.sweets[id];
        if (!sweet) throw new Error("Sweet not found");
        if (sweet.quantity < quantity || quantity < 0) throw new Error("Insufficient stock");
        sweet.quantity -= quantity;
    }


    //view sweets logic
    viewSweets() {
        return Object.values(this.sweets);
    }


    //restock sweets logic
    restockSweet(id, quantity) {
        const sweet = this.sweets[id];
        if (!sweet) throw new Error("Sweet not found");
        sweet.quantity += quantity;
    }



    //search sweets logic
    searchSweets({ name, category, minPrice, maxPrice }) {
        return Object.values(this.sweets).filter(s => {
            return (
                (!name || s.name.toLowerCase().includes(name.toLowerCase()))
            );
        });
    }




}
module.exports = SweetShop;