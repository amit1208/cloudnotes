const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
const mongoose=require('mongoose')
const app = express()


mongoose.connect("mongodb://localhost:27017/cloudnotes", ()=>{
        console.log("Connected to Mongo Successfully");
    })

const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
//
app.use(express.static(path.join(__dirname,'build')))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'build/index.html'))
})



app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})