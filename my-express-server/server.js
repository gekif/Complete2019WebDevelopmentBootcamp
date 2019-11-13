const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/contact', (req, res) => {
    res.send("Contact me at: gekif");
});

app.get('/about', (req, res) => {
    res.send("Scrum mastah");
});

app.get('/hobbies', (req, res) => {
    res.send('<ul><li>Basketball</li><li>Magic</li></ul>');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

