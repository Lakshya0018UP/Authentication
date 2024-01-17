const mongoose=require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/data")
.then(()=>{
    console.log("sever connected")
})

.catch(()=>{
    console.log("error")
})

const login=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",login)

module.exports=collection