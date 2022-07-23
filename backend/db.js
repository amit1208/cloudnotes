const mongoose = require('mongoose');

const connectToMongo = ()=>{
    mongoose.connect("mongodb://localhost:27017/cloudnotes", ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;

