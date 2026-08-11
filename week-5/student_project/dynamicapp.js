const express = require('express');

const app = express();

const PORT = 3000;

app.get('/student/:id', (req, res) => {

    // Express automatically puts the value after /student/
    // into req.params

    const studentId = req.params.id;

    res.send(
        `<h1>Student Profile</h1>
         <p>You are viewing the profile for Student ID:
         <strong>${studentId}</strong></p>`
    );
});

app.get('/student/:branch/course/:id', (req, res) => {

    const { branch, id } = req.params;

    res.send(
        `<h1>Student Course Details</h1>
         <p>Branch: <b>${branch}</b></p>
         <p>Course ID: <b>${id}</b></p>`
    );
});

app.get('/search', (req, res) => {

    // Access query parameters using req.query

    const branch = req.query.branch;
    const year = req.query.year;

    res.json({
        message: "Student Search Results",
        branch: branch || "All Branches",
        year: year || "All Years"
    });
});

app.get('/students', (req, res) => {

    const sort = req.query.sort;
    const limit = req.query.limit;

    res.json({
        message: "Student List",
        sortingBy: sort || "Default",
        displaying: limit || "All Students"
    });
});

app.listen(PORT, () => {
    console.log(
        `Dynamic Student Server running at http://localhost:${PORT}`
    );
});