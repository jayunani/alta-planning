var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

var nodemailer = require('nodemailer');

app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.post('/', function(req, res){
    console.log('inside post');
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "j.ayunani@gmail.com",
            pass: "jayunani8521"
        }
    });
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
