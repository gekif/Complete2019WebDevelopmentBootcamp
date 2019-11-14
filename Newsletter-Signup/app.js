const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = new express();
const port = 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});


app.post('/', (req, res) => {

    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

    let data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    let jsonData = JSON.stringify(data);

    let options = {
        url: 'https://us19.api.mailchimp.com/3.0/lists/7c549989ec',
        method: 'POST',
        headers: {
            'Authorization': 'gekif 816b38aea9ea02f23143bbcb32ebf3ff-us19'
        },
        // body: jsonData

    };

    request(options, (error, response, body) => {
        if (error) {
            res.sendFile(__dirname + '/failure.html');
        } else {
            if (response.statusCode === 200) {
                res.sendFile(__dirname + '/success.html');
            } else {
                res.sendFile(__dirname + '/failure.html');
            }
        }
    });

});


app.post('/failure', (req, res) => {
    res.redirect('/');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



