const {db} = require("../src/public/js/main.js")

describe("Items",()=>{
    test('Should have items',()=>{
        expect(db.items).toBeDefined();
    })

    test('Should have id, title, price, qty as atributes',()=>{
        for(item of db.items){
            expect(item).toBeInstanceOf(Object)
            expect(item.id).toEqual(expect.any(Number))
            expect(item.title).toEqual(expect.any(String))
            expect(item.price).toEqual(expect.any(Number))
            expect(item.qty).toEqual(expect.any(Number))
        }
    })
})

describe("Methods",()=>{
    test('Should have methods',()=>{
        expect(db.methods).toBeDefined();
        expect(db.methods.addProduct).toBeDefined();
        expect(db.methods.find).toBeDefined();
        expect(db.methods.remove).toBeDefined();
    })

    test('Should add a product',()=>{
        let sizeOld = db.items.length;
        db.methods.addProduct("nuevo item",10,1)
        let sizeNew = db.items.length;
        let newItem = db.items[sizeOld];
        expect(sizeOld).toBe(sizeNew-1);
        expect(newItem.id).toBe(sizeOld);
        expect(newItem.title).toBe("nuevo item");
        expect(newItem.price).toBe(10);
        expect(newItem.qty).toBe(1);
    })
    
    test('Should find a product',()=>{
        let size = db.items.length;
        let item = db.methods.find(size-1)   
        expect(item.id).toBe(size-1);
        expect(item.title).toBe("nuevo item");
        expect(item.price).toBe(10);
        expect(item.qty).toBe(1);
    })

    test('Should remove a product',()=>{
        let size = db.items.length;

        let items = [{
            id: size - 1,
            qty: 1
        }]

        db.methods.remove(items);
        let item = db.methods.find(size-1);
        expect(item.qty).toBe(1- items[0].qty);
    })
})
