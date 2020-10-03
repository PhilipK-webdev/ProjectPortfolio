const router = require("express").Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/send', (req, res) => {
    const email = req.body.email;
    const message = req.body.message;
    const content = `email: ${email} \n message: ${message} `
    const mail = {

        from: process.env.EMAIL,
        to: process.env.PERSONAL,
        message: message,
        text: content
    }
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    transporter.sendMail(mail, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
            console.log('Email sent: ' + info.response);
        }
    });


});

module.exports = router;