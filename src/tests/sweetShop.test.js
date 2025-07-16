const SweetShop = require('../services/sweetShop');

describe('SweetShop', () => {
    let shop;

    beforeEach(() => {
        shop = new SweetShop();
    });

    // add sweets logic
    test('throws error if required fields are missing or empty', () => {
        expect(() => {
            shop.addSweet('', 'Kaju Katli', 'Nut-Based', 50, 20);
        }).toThrow('ID, Name, and Category are required');

        expect(() => {
            shop.addSweet('1002', '', 'Nut-Based', 50, 20);
        }).toThrow('ID, Name, and Category are required');

        expect(() => {
            shop.addSweet('1003', 'Kaju Katli', '', 50, 20);
        }).toThrow('ID, Name, and Category are required');
    });

    test('adds a sweet', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        expect(shop.sweets['1001'].name).toBe('Kaju Katli');
    });

    test('throws error on duplicate sweet ID', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        expect(() => shop.addSweet('1001', 'Other Sweet', 'Candy', 20, 10)).toThrow();
    });




    //delete sweets logic
    test('deletes a sweet', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.deleteSweet('1001');
        expect(shop.sweets['1001']).toBeUndefined();
    });
    test('throws error when deleting non-existent sweet', () => {
        expect(() => shop.deleteSweet('9999')).toThrow('Sweet with ID 9999 not found');
    });


    //purchase sweets logic
    test('purchase sweet reduces quantity', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.purchaseSweet('1001', 5);
        expect(shop.sweets['1001'].quantity).toBe(15);
    });

});