const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('./models/titlemodel')    
const Title = mongoose.model('Title')

mongoose.connect('mongodb+srv://devanshirathore:vitian2021@cluster0.stf9aps.mongodb.net/node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connect to mongodb')
    app.listen(3000,()=> {
        
    console.log('node api is running on port 3000')
})
}).catch(() => {
    console.log(error)
})
app.post('/task',async (req,res)=> {
    console.log(req.query)
    const id=req.query.id
    const title = req.query.title
    const description = req.query.description
    const status = 'pending'
    const data = {
        id,
        title,
        description,
        status,
    }
    const createObj=await Title.create(data)
    console.log(createObj)
    res.end('successfully created')
    
})

app.get('/task', async (req,res)=>{
    console.log("fetching all datas inside Title tables.")
    const fetchData = await Title.find().sort({id:1})
    res.status(200).send({message:"Successfully fetched all datas", data:fetchData})
  })

  app.put('/task', async (req,res)=> {
    console.log("updating status for id(:", req.query.id)
    const updateData = await Title.updateOne({id:req.query.id},{$set:{status:"Completed"}})
    console.log(updateData)
    res.status(200).send({message:"Successfully fetched all datas"})
  })