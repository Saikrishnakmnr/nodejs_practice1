

const res = require("express/lib/response");

const { app } = require("../express-config.js");

const {getAllStudents,
    createStudent,
    searchByGender,
    searchByclass,
    updateStudent,
    deleteStudent} = require ("./controller")







app.get('/students', getAllStudents)

app.post("/students/create",createStudent)

app.get("/students/search-by-gender",searchByGender)

app.get("/students/search-by-class/:class",searchByclass)

app.put("/students/update/:id",updateStudent)

app.delete("/students/delete/:id",deleteStudent)

