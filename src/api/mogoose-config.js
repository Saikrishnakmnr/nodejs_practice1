
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/SCHOOL").then(()=>{
   console.log('connected to mongodb')
})
.catch(err=>{
  console.log('inserting not posiible')
})

module.exports = {
    mongoose
}
