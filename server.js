var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({ service: "Gmail", auth: { user: "j.ayunani@gmail.com", pass: "jayunani8521" }});
var fs = require('fs');
var path = require('path');
var express = require('express'); 
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

 
app.post('/', function(req, res){
    console.log('inside email post ' + req);
    var mailContent = {
        from: 'do-not-reply <j.ayunani@gmail.com>',
        to: 'j.ayunani@gmail.com',
        subject: 'form submission',
        text: 'name: ' + req.body.name + 'email: ' + req.body.email
    }
    transporter.sendMail(mailContent, function(err, info) {
        if(err){
            console.log('email error ' + error);
        } else {
            console.log('email sent: ' + info.response);
        }
    })
});

app.listen(PORT, function() {
    console.log('Express server working on port ' + PORT);
});
