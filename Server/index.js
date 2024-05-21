const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 5050


const app = express()
app.use(cors())
app.use(express.json())


const ProductSchema = new mongoose.Schema({
    name :String,
    title:String,
    imgSrc:String,
    price:Number
}) ;
const ProductModel = mongoose.model("Products", ProductSchema)
app.get('/api/product',async(req,res)=>{
    try {
        const product = await ProductModel.find()
        res.send({
            messages:'success',
            data:product
        })
    } catch (error) {
        res.send({error:error})
    }
})
app.get('/api/product/:id', async(req,res)=>{
    const {id}= req.params
    try {
        const product = await ProductModel.findById(id)
        res.send({
            messages:"success",
            data:product
        })
    } catch (error) {
        res.send({
            error:error
        })
    }
})
app.delete('/api/product/:id', async(req,res)=>{
    const {id}= req.params
    try {
        const product = await ProductModel.findByIdAndDelete(id)
        res.send({
            messages:"delete",
            data:product
        })
    } catch (error) {
        res.send({
            error:error
        })
    }
})
app.post("/api/product", async(req,res)=>{
    try {
        const product = new ProductModel(req.body)
        await product.save()
        res.send({
            messages:"post",
            data:product
        })
    } catch (error) {
        res.send({
            error:error
        })
    }
})



mongoose.connect('mongodb+srv://amin:amin123@products.vqzarfi.mongodb.net/').then(()=>{
    console.log("Connected")
}).catch((error)=>{
    console.log(error)
})
app.listen(PORT,()=>{
    console.log("Port Listen",`${PORT}`)
})

