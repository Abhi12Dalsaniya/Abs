const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Radhe_Krishna");
    res.write(" ");
    res.write(" ");
    res.send([{
        id:1,
        name:"as"
    }]);
});
app.listen(8000,()=>{
    console.log("Listening port 8000");
});