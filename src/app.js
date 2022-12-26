const express = require("express");
const {join} = require("path");
// const morgan = require('morgan');
// const {db} = require("./public/js/main.js");
// import {db} from "./public/js/main.js";

const app = express();

app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.json());
// app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/agregarProducto',(req,res)=>{
    res.render('agregarProducto');
})

app.post('/agregarProducto',(req,res)=>{
    res.render('index.ejs')
})


app.use(express.static(join(__dirname,'public')))

module.exports = app;