const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Server is listen on port 3000');
});
