const express = require('express');

const app = express();

const PORT = 3000;


// ------------------------------------
// MIDDLEWARE
// ------------------------------------

// Allows Express to read JSON data
// from POST and PUT requests.

app.use(express.json());


// ------------------------------------
// MOCK DATABASE
// ------------------------------------

let students = [
    {
        id: 1,
        name: "Anjali",
        branch: "AIML"
    },
    {
        id: 2,
        name: "Rahul",
        branch: "CSE"
    }
];


// ------------------------------------
// 1. GET - READ ALL STUDENTS
// ------------------------------------

app.get('/students', (req, res) => {

    res.json(students);

});


// ------------------------------------
// 2. POST - CREATE A NEW STUDENT
// ------------------------------------

app.post('/students', (req, res) => {

    const newStudent = {

        id: students.length + 1,

        name: req.body.name,

        branch: req.body.branch
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student created successfully",
        student: newStudent
    });

});


// ------------------------------------
// 3. PUT - UPDATE A STUDENT
// ------------------------------------

// Example:
// http://localhost:3000/students/1

app.put('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(
        s => s.id === id
    );

    if (student) {

        student.name = req.body.name;

        student.branch = req.body.branch;

        res.json({
            message: "Student updated successfully",
            student: student
        });

    } else {

        res.status(404).json({
            error: "Student not found"
        });

    }

});


// ------------------------------------
// 4. DELETE - REMOVE A STUDENT
// ------------------------------------

// Example:
// http://localhost:3000/students/2

app.delete('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(
        s => s.id === id
    );

    if (!student) {

        return res.status(404).json({
            error: "Student not found"
        });

    }

    students = students.filter(
        s => s.id !== id
    );

    res.json({
        message: `Student ${id} deleted successfully`,
        remainingStudents: students
    });

});


// ------------------------------------
// START SERVER
// ------------------------------------

app.listen(PORT, () => {

    console.log("--------------------------------");
    console.log(
        `Student REST API Server running at http://localhost:${PORT}`
    );
    console.log("Listening for requests...");
    console.log("--------------------------------");

});