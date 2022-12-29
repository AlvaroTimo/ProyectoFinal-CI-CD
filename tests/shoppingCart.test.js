const {shoppingCart} = require("../src/public/js/main.js")

describe("Methods",()=>{
    test('Should have methods',()=>{
        expect(shoppingCart.methods).toBeDefined();
        expect(shoppingCart.methods.add).toBeDefined();
        expect(shoppingCart.methods.remove).toBeDefined();
        expect(shoppingCart.methods.count).toBeDefined();
        expect(shoppingCart.methods.get).toBeDefined();
        expect(shoppingCart.methods.getTotal).toBeDefined();
        expect(shoppingCart.methods.hasInventory).toBeDefined();
        expect(shoppingCart.methods.purchase).toBeDefined();
    })

    test('Should add a product',()=>{
        let sizeOld = shoppingCart.items.length;
        shoppingCart.methods.add(1,2)
        let sizeNew = shoppingCart.items.length;
        let newItem = shoppingCart.items[sizeOld];
        expect(sizeOld).toBe(sizeNew-1);
        expect(newItem.id).toBe(1);
        expect(newItem.qty).toBe(2);
    })
    
    test('Should not get an item',()=>{
        let id= shoppingCart.methods.get(4);
        expect(id).toBeNull();
    })

    test('Should get an item',()=>{
        let item=shoppingCart.methods.get(1);
        expect(item.id).toBe(1);
        expect(item.qty).toBe(2);
    })

    test('Should get total number of items',()=>{
        let total = shoppingCart.methods.count();
        expect(total).toBe(2);
    })

    test('Should reduce quantity on items',()=>{
        let oldQuantity= (shoppingCart.items[0]).qty;
        shoppingCart.methods.remove(1,1);
        let newQuantity= (shoppingCart.items[0]).qty;
        expect(newQuantity).toBe(oldQuantity-1);
    })

    test('Should return true',()=>{
        let hasInventory = shoppingCart.methods.hasInventory(1,2);
        expect(hasInventory).toBe(true)
    })

    test('Should clear all elements on items',()=>{
        shoppingCart.methods.purchase();
        let size = shoppingCart.items.length;
        expect(size).toBe(0);
    })
})

describe("Items",()=>{
    test('Should have items',()=>{
        expect(shoppingCart.items).toBeDefined();
    })

    test('Should have id and qty as atributes',()=>{
        shoppingCart.methods.add(1,2)
        for(item of shoppingCart.items){
            expect(item).toBeInstanceOf(Object)
            expect(item.id).toEqual(expect.any(Number))
            expect(item.qty).toEqual(expect.any(Number))
        }
    })
})