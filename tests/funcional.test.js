const {By,Key,Builder,until} = require("selenium-webdriver")
require("chromedriver")
const chrome = require('selenium-webdriver/chrome');

const screen = {
    width: 640,
    height: 480
};

jest.setTimeout(10000)

test('Should redirect to shopping cart',async()=>{
    driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(new chrome.Options().headless().windowSize(screen))
        .build();
    try {
        await driver.get("http://localhost:3000/");
        expect(await driver.getTitle()).toBe("Trabajo Final IS2");

        await driver.findElement(By.name('carrito')).click();

        expect(await driver.getTitle()).toBe("Carrito de compras");
    }catch(e) {
        await driver.quit();
        throw new Error(e);
    }
});

test('Should redirect to add product',async()=>{
    try {
        await driver.get("http://localhost:3000/index");
        expect(await driver.getTitle()).toBe("Carrito de compras");

        await driver.findElement(By.name('add_product')).click();

        expect(await driver.getTitle()).toBe("Agregar producto");
    }catch(e) {
        await driver.quit();
        throw new Error(e);
    }
});

test('Should add an item on shoppingCart',async()=>{
    try {
        await driver.get("http://localhost:3000/index");
        expect(await driver.getTitle()).toBe("Carrito de compras");

        await driver.findElement(By.name('2')).click();
        let _item = await driver.findElement(By.id('2'));
        let _id = await _item.getAttribute("id");
        expect(_id).toBe("2");
    }catch(e) {
        await driver.quit();
        throw new Error(e);
    }
});

test('Should close shoppingCart',async()=>{
    try {
        await driver.get("http://localhost:3000/index");
        expect(await driver.getTitle()).toBe("Carrito de compras");

        await driver.findElement(By.name('2')).click();

        await driver.findElement(By.id('bClose')).click();
        let _item = await driver.findElement(By.className('hide'));
        expect(_item).toBeDefined();
    }catch(e) {
        await driver.quit();
        throw new Error(e);
    }
})