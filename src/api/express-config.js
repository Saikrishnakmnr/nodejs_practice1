
const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',function (req,res){
    res.send('welocme to school')
})
app.listen(8080)

module.exports = {
      app
}