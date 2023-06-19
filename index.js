const express=require("express")
const mongoose=require("mongoose")
const collegerouter=require("./routes/college-routes")
const app=express()
app.use("/college",collegerouter)
app.listen(4000,()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/college").then(()=>{
         console.log("connected to db successfully in port number 4000");
    }).catch(err=>{
        console.log("not connected to portnumber 4000");
    })
})