// require
const express=require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()



// Schema
const {Schema} = mongoose;
const goodsSchema = new Schema(
    {
        goodsimg:{type:String,required:true},
        goodstitle:{type:String,required:true},
        goodsbrend:{type:String,required:true},
        goodsprice:{type:Number,required:true}
    },
    {timestamps:true}
)
const Goods = mongoose.model("goods",goodsSchema)




// express
const app = express()
app.use(cors())
app.use(bodyParser.json())




// methods
app.get("/",(req,res)=>{
    res.send("<h1>Api</h1>")
})

app.get("/goods",(req,res)=>{
    console.log("here")
    Goods.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            console.log(err);
        }
    })
})



app.get("/goods/:id",(req,res)=>{
    const {id} = req.params;
    Goods.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }
            else{
                res.status(404).json({message:"not found"})
            }
        }
        else{
            console.log(err);
        }
    })
})

app.post("/goods/",(req,res)=>{
    const goods = new Goods({
        goodsimg:req.body.goodsimg,
        goodstitle:req.body.goodstitle,
        goodsbrend:req.body.goodsbrend,
        goodsprice:req.body.goodsprice
    })
    goods.save()
    res.send({message:"Save succesfully!"})
})

app.delete("/goods/:id",(req,res)=>{
    const {id} = req.params;
    Goods.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("Succesfully deleted!")
        }
        else{
            console.log(err);
        }
    })
})


//connection
const port = process.env.port;
const url = process.env.connection_url.replace("<password>",process.env.password)

mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("connection success!");
        app.listen(port,()=>{
            console.log("server working..."+port);
        })
    }
    else{
        console.log(err);
    }
})