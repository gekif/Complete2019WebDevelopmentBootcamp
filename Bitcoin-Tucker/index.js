const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = new express();

const port = 3000;


app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.post('/', (req, res) => {

    let crypto = req.body.crypto;
    let fiat = req.body.fiat;

    let baseURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';

    let finalURL = baseURL + crypto + fiat;

    request(finalURL, (error, response, body) => {

        // console.log(body);

        let data = JSON.parse(body);
        let price = data.last;

        let currentDate = data.display_timestamp;

        res.write(`<p>The current date is ${currentDate}</p>`);

        res.write(`<h1>The current price of ${crypto} is ${price} ${fiat}</h1>`);

        res.send()

    });

});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});