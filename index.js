const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Student Management System');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
