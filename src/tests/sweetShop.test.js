const sweetshop = require('../services/sweetShop');

describe('SweetShop', () => {
    let shop;

    beforeEach(() => {
        shop = new sweetshop();
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
    test('applies 10% discount with valid coupon code', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        const price = shop.purchaseSweet('1001', 2, '10%discount'); 
        expect(price).toBe(90);
        expect(shop.sweets['1001'].quantity).toBe(18);
    });




    // view sweets logic
    test('viewSweets returns empty array when no sweets exist', () => {
        const result = shop.viewSweets();
        expect(result).toEqual([]);
        expect(Array.isArray(result)).toBe(true);
    });



    // restock sweets logic
    test('restocks sweet increases quantity', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.restockSweet('1001', 10);
        expect(shop.sweets['1001'].quantity).toBe(30);
    });
    test('throws error when restocking non-existent sweet', () => {
        expect(() => shop.restockSweet('9999', 10)).toThrow('Sweet not found');
    });




    //search sweets logic
    test('search sweets by name', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.addSweet('1002', 'Rasgulla', 'Syrup-Based', 30, 15);
        shop.addSweet('1003', 'Barfi', 'Nut-Based', 40, 10);

        const results = shop.searchSweets({ name: 'kaju' });
        expect(results.length).toBe(1);
        expect(results[0].name).toBe('Kaju Katli');
    });
    test('search sweets by category', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.addSweet('1002', 'Rasgulla', 'Syrup-Based', 30, 15);
        shop.addSweet('1003', 'Barfi', 'Nut-Based', 40, 10);

        const results = shop.searchSweets({ category: 'Nut-Based' });
        expect(results.length).toBe(2);
        const names = results.map(s => s.name);
        expect(names).toContain('Kaju Katli');
        expect(names).toContain('Barfi');
    });
    test('search sweets by price range', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.addSweet('1002', 'Rasgulla', 'Syrup-Based', 30, 15);
        shop.addSweet('1003', 'Barfi', 'Nut-Based', 40, 10);
        const results = shop.searchSweets({ minPrice: 35, maxPrice: 50 });
        expect(results.length).toBe(2);
        const names = results.map(s => s.name);
        expect(names).toContain('Kaju Katli');
        expect(names).toContain('Barfi');
    });




    test('sort sweets by price ascending', () => {
        shop.addSweet('1001', 'Kaju Katli', 'Nut-Based', 50, 20);
        shop.addSweet('1002', 'Rasgulla', 'Syrup-Based', 30, 15);
        shop.addSweet('1003', 'Barfi', 'Nut-Based', 40, 10);
        const sweets = shop.viewSweets().sort((a, b) => a.price - b.price);
        expect(sweets[0].name).toBe('Rasgulla');
        expect(sweets[1].name).toBe('Barfi');
        expect(sweets[2].name).toBe('Kaju Katli');
    });


});