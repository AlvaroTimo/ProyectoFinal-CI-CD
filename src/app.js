const express = require("express");
const {join} = require("path");

const app = express();

app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.get('/index',(req,res)=>{
    res.render('index.ejs');
})

app.get('/agregarProducto',(req,res)=>{
    res.render('agregarProducto.ejs');
})

app.post('/agregarProducto',(req,res)=>{
    res.render('index.ejs')
})

app.use(express.static(join(__dirname,'public')))

module.exports = app;