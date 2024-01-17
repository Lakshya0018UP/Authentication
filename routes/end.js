const express=require("express")

const router=express.Router()


router.get("/",(req,res)=>{
    // res.end("Hello World")

    res.render("login")
})
router.get("/signup",(req,res)=>{
    // res.end("Hello World")

    res.render("signup")
})

module.exports=router