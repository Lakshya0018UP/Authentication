const express=require("express")
const expbhs=require("express-handlebars")
const collection=require("./mongoDB")


const app=express()
const port=5000

const path=require("path")


app.use('/',require(path.join(__dirname,"./routes/end.js")))

app.use(express.urlencoded({extended:false}))

app.post("/signup",async(req,res)=>{
    const data=[{
        name:req.body.name,
        password:req.body.password
    }]
await collection.insertMany(data)

res.render("home")
})
app.post("/login",async(req,res)=>{
    try{
        const check=await collection.findOne({name:req.body.name})

        if(check.password===req.body.password){
            res.render("home")
        } else{
            res.send("Wrong password")
        }
    }
    catch{
        res.send("Wrong credentials")
    }

})

app.engine("handlebars",expbhs.engine())

app.set("view engine","handlebars")



app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})