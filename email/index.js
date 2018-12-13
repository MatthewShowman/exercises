const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    let mailOptions = {
        from: "matthew.t.showman@gmail.com",
        to: "showmansarah@gmail.com",
        subject: "Travel times next week",
        text: "I need to confirm when you will be traveling next week.",
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log('The message was sent' + info.messageId);
        console.log(nodemailer.getTestMessageUrl(info));
    });

});

