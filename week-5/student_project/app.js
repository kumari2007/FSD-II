const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(
        '<h1>Welcome to Student Portal</h1>' +
        '<p>You have reached the Student Management Home Page.</p>'
    );
});

app.get('/about', (req, res) => {
    res.send(
        'This Student Portal was created using Express.js.'
    );
});

app.get('/api/student', (req, res) => {
    res.json({
        name: "Anjali",
        branch: "AIML",
        year: "2nd Year",
        rollNumber: "AIML-101"
    });
});

app.get('/api/status', (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "Student Portal is running successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Success! Student Server is running at http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop the server.");
});