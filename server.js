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

app.post('/contactus', function(req, res){
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
        text: 'name: ' + req.body.name + 'email: ' + req.body.email;
        html: <p>you have a new form submission: </p><ul><li>req.body.name</li></ul>
    }
    transporter.sendMail(mailContent, function(err, info) {
        if(err){
            console.log('error ' + error);
        } else {
            console.log('sent: ' + info.response);
        }
    })
});

app.listen(PORT, function() {
    console.log('Express server working on port ' + PORT);
});
