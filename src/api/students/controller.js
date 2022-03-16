const {  StudentsModel } = require("./model");

module.exports = {

    getAllStudents:( req,res)=>{
        StudentsModel.find({},(error,data)=>{
            if(error){
                res.send({error: true , type: error.name , message: error.message})
            }else{
                res.send(data)
                console.log(data)
            }
        })
    },

    createStudent:(req,res)=>{
        StudentsModel.create(req.body, (error, data)=>{
            if(error){
                res.send({error: true , type: error.name ,  message: error.message })
            }
            else{
                res.send(data)
                console.log(data)
            }
        })
    },

    searchByGender:(req,res)=>{
        StudentsModel.find({gender:req.query.gender},(error,data)=>{
            if(error){
                res.send({error: true , type: error.name , message:error.message})
            }
            else{
                res.send(data)
            }
        })
    },

    searchByclass:(req,res)=>{
        StudentsModel.find({class:req.params.class},(error,data)=>{
            if(error){
                req.send({error: true , type: error.name ,message: error.message})
            }
            else{
                res.send(data)
            }
        })
    },

    updateStudent:(req,res)=>{
        StudentsModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(error,data)=>{
            if(error){
                res.send({error:true , type:error.name ,message: error.message})
            }
            else{
                res.send(data)
            }
        })
        },

     deleteStudent:(req,res)=>{
        StudentsModel.findByIdAndRemove(req.params.id,(error,data)=>{
            if(error){
                res.send({error: true , type: error.name , message:error.message})
            }
            else{
                res.send(data)
            }
        })
    }   

}
