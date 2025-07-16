const SweetShop = require('../services/sweetShop');

describe('SweetShop', () => {
    let shop;

    beforeEach(() => {
        shop = new SweetShop();
    });
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


});