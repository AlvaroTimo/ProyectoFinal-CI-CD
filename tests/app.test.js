const request = require ("supertest")
const app = require("../src/app.js")

describe('GET /',()=>{
    test("should respond with a 200 status code",async ()=>{
        const response = await request(app).get('/').send()
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 200 status code",async ()=>{
        const response = await request(app).get('/#services').send()
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 200 status code",async ()=>{
        const response = await request(app).get('/#portfolio').send()
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 200 status code",async ()=>{
        const response = await request(app).get('/#about').send()
        expect(response.statusCode).toBe(200)
    })
    test("should respond with a 200 status code",async ()=>{
        const response = await request(app).get('/#team').send()
        expect(response.statusCode).toBe(200)
    })
})

describe('GET /index',()=>{
    test("should respond with a 200 status code",async ()=>{
        const response = await request(app).get('/index').send()
        expect(response.statusCode).toBe(200)
    })
})

describe('GET /agregarProducto',()=>{
    test("should respond with a 200 status code",async ()=>{
        const response = await request(app).get('/agregarProducto').send()
        expect(response.statusCode).toBe(200)
    })
})