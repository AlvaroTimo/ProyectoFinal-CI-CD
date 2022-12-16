import express from "express";
import {dirname,join} from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname=dirname(fileURLToPath(import.meta.url))

app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    console.log("listando algo")
    res.render('index');
})

app.use(express.static(join(__dirname,'public')))

export default app;