const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/students', (req, res) => {
    res.send(req.body);
})

app.listen(3000, () => console.log('listening on port 3000...'));