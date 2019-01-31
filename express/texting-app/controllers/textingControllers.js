exports.getHomePage = (req, res) => {
    res.render('app');
}

exports.sendSMS = (req, res) => {
    let { phone, message } = req.body;

    const accountSid = 'AC2aa16e9e184d30125568614d58409ee7';
    const authToken = 'd0b96ec2c6e455ad36a70bb61ffbf3d7';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: message,
            from: '+12085161744',
            to: phone
        })
        .then(message => console.log(message.sid))
        .done();

    res.redirect('/');
}