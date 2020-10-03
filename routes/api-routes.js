const router = require("express").Router();
const nodemailer = require('nodemailer');

router.post('/send', (req, res) => {
    const email = req.body.email;
    const message = req.body.message;
    const content = `email: ${email} \n message: ${message} `
    const mail = {
        from: `"Example Team",${email}`,
        to: "philipk179@gmail.com",
        subject: "Hi",
        message: content,
        text: message
    }
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "02607a87b1850b",
            pass: "34637c1d2daafe"
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