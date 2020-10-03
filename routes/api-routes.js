const router = require("express").Router();
const nodemailer = require('nodemailer');


router.post('/send', (req, res) => {
    const email = req.body.email;
    const message = req.body.message;
    const content = `email: ${email} \n message: ${message} `
    const mail = {

        from: `"Example Team",<b0n3snapp3r@yahoo.com>`,
        to: email,
        message: content,
        text: message
    }
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "philipk179@gmail.com",
            pass: "b0n3snapp3r89"
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