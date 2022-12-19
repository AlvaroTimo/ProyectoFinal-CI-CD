const express = require("express");
const {dirname,join} = require("path");
// const { fileURLToPath } = require("url");

const app = express();

// const __dirname=dirname(fileURLToPath(import.meta.url))

app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index');
})

app.use(express.static(join(__dirname,'public')))

module.exports = app;