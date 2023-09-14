const mongoose = require("mongoose")


        mongoose.connect("mongodb://127.0.0.1:27017/Habbit_App").then(()=>{
            console.log("Connection established");

        }).catch((err)=>{
            console.log("error in db connection");
        })
   
   

