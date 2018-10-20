const axios = require('axios');

// axios.get('http://localhost:3000/movies').then(
//     (result) => {
//         console.log(result.status, result.statusText);
//         let movies = result.data;
//         console.log(movies);
//     }
// )

// axios.post('http://localhost:3000/movies', {title: 'Oklahoma'}).then(
//     (result) => {
//         console.log(result.data);
//     }
// )

axios.patch('http://localhost:3000/movies/5', {category: 'musical'}).then(
    (result) => {
        console.log(result.data);
    }
)

axios.post('http://localhost:3000/movies', {title: 'School of Rock'})
    .then(
        (result) => {
            console.log(result.data);

            return axios.patch('http://localhost:3000/movies/5', {category: 'comedy'})
        
        }
    ).then(
        (result) => {
            return axios.get('http://localhost:3000/movies')
        }
    ).then(
        (result) => {
            console.log(result.data);
        }
    )