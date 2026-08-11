const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {

    const timestamp = new Date().toLocaleString();

    console.log(
        `[${timestamp}] Request: ${req.method} ${req.url}`
    );

    next();
});

app.use((req, res, next) => {

    const userAgent = req.get('User-Agent');

    if (!userAgent) {
        return res.status(400).json({
            error: "Browser identification missing"
        });
    }

    next();
});

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

app.get('/students', (req, res) => {

    res.json(students);

});

app.post('/students', (req, res) => {

    const newStudent = {

        // If user provides an ID, use it.
        // Otherwise generate a new ID.

        id: req.body.id != null
            ? req.body.id
            : students.length + 1,

        name: req.body.name,

        branch: req.body.branch
    };

    students.push(newStudent);

    res.status(201).json(newStudent);

});

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

app.delete('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const studentExists = students.some(
        s => s.id === id
    );

    if (!studentExists) {

        return res.status(404).json({
            error: "Student not found"
        });

    }

    students = students.filter(
        s => s.id !== id
    );

    res.json({
        message: `Student ${id} deleted`,
        remainingStudents: students
    });

});

app.listen(PORT, () => {

    console.log("--------------------------------");
    console.log(
        `Student REST API running at http://localhost:${PORT}`
    );
    console.log("Listening for requests...");
    console.log("--------------------------------");

});