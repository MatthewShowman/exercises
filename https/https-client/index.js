const https = require('https');

// during production only
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

https.get('https://localhost:443', (response) => {
    let body = "";
    response.on('data', (data) => {
        body += data;
    });

    response.on('end', () => console.log(body));
});