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
    let amount = req.body.amount;

    const options = {
        url: 'https://apiv2.bitcoinaverage.com/convert/global',
        method: 'GET',
        qs: {
            from: crypto,
            to: fiat,
            amount: amount
        }
    };

    request(options, (error, response, body) => {

        let data = JSON.parse(body);
        let price = data.price;

        console.log(price);

        let currentDate = data.time;

        res.write(`<p>The current date is ${currentDate}</p>`);

        res.write(`<h1>${amount} ${crypto} is currently worth ${price} ${fiat}</h1>`);

        res.send()

    });

});





app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});