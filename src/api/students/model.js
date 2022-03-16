const {mongoose} = require('../mogoose-config')

const StudentsSchema = new mongoose.Schema({
    name:{
         type:String,

         required: true

       
         
     },
 
     gender:{
         type:String,

         required: true,

         enum: ['male','female','others']
     },

     email:{
           type: String,

            required: [true, 'student email is required'],

            unique: true,

            

            validate: {
                  validator: async function(email) {
                    const student = await this.constructor.findOne({ email });
                    if(student) {
                      if(this._id === student._id) {
                        return true;
                      }

                      return false;
                    }
                    return true;
                  },
                  message: props => 'entered email already in use, Try with another Email'
                }
          },
 
     dob:{
 
         type: Date,
 

         required: true
     },
 
     class:{
         type: String,

         required: true
     },

     about:{

        type:String
     }
     
 },{
   timestamps:true
 })
 
 const StudentsModel = mongoose.model('students',StudentsSchema)
 // StudentsModel.create({name:"vinay",gender:"male","dob":new Date("2000-02-1"),class:"6th"})

module.exports = {
    
    StudentsModel
};