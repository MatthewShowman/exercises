const axios = require('axios');

axios.get('http://localhost:8001')
    .then(response => {
        console.log(response.data.emoji);
        }
    )

