const express = require("express");
const mongoose = require("mongoose");
const res = require("express/lib/response");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

  mongoose.connect("mongodb://localhost/SCHOOL").then(()=>{
    console.log('connected to mongodb')
})
.catch(err=>{
    console.log('inserting not posiible')
})

const StudentsSchema = new mongoose.Schema({
   name:{
        type:String
    },

    gender:{
        type:String
    },

    dob:{

        type:Date
    },

    class:{
        type: String
    }
    
})

const StudentsModel = mongoose.model('students',StudentsSchema)
// StudentsModel.create({name:"vinay",gender:"male","dob":new Date("20/08/2001"),class:"EEE"})


app.get('/',function (req,res){
    res.send('welocme to school')
})

app.get('/students',function (req,res){
    StudentsModel.find({},(err,data)=>{
        if(err){
            res.send({error:true,message:"unable to fetch data"})
        }else{
            res.send(data)
            console.log(data)
        }
    })

    app.post("/students/create",(req,res)=>{
        StudentsModel.create(req.body, (err, data)=>{
            if(err){
                res.send({error:true,message:"unable to insert data into students collection"})
            }
            else{
                res.send(data)
                console.log(data)
            }
        })
    })
})

app.get("/students/search-by-gender",(req,res)=>{
    StudentsModel.find({gender:req.query.gender},(err,data)=>{
        if(err){
            res.send({error:true,message:"unable to fetch"})
        }
        else{
            res.send(data)
        }
    })
})

app.get("/students/search-by-branch/:class",(req,res)=>{
    StudentsModel.find({branch:req.params.class},(err,data)=>{
        if(err){
            req.send({error:true,message:"unable to fetch data"})
        }
        else{
            res.send(data)
        }
    })
})

app.put("/students/update/:id",(req,res)=>{
StudentsModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,data)=>{
    if(err){
        res.send({error:true,message:"unable to update data"})
    }
    else{
        res.send(data)
    }
})
})

app.delete("/students/delete/:id",(req,res)=>{
    StudentsModel.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err){
            res.send({error:true,message:"unable to delete recorde"})
        }
        else{
            res.send(data)
        }
    })
})

app.listen(8080)