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

// axios.patch('http://localhost:3000/movies/5', {category: 'musical'}).then(
//     (result) => {
//         console.log(result.data);
//     }
// )



// axios.post('http://localhost:3000/movies', {title: 'School of Rock'})
//     .then(
//         (result) => {
//             console.log(result.data);

//             return axios.patch('http://localhost:3000/movies/' + result.data.id, {category: 'comedy'})
        
//         }
//     ).then(
//         (result) => {
//             return axios.get('http://localhost:3000/movies')
//         }
//     ).then(
//         (result) => {
//             console.log(result.data);
//         }
//     )


async function listOfMovies(movieTitle, genre) {
    let result = await axios.post('http://localhost:3000/movies', {title: movieTitle}); // Returns a full axios post w/ data, status, etc.
    let newMovie = result.data;
    console.log(newMovie)
    await axios.patch('http://localhost:3000/movies/' + result.data.id, {category: genre});
    let movieList = await axios.get('http://localhost:3000/movies');
    console.log(movieList.data);
}

// listOfMovies('Ninjago', 'animated');
// listOfMovies('Night of the Living Dead', 'horror');
// listOfMovies('The Shape of Things', 'drama');




async function deleteMovie(movieTitle) {
    // Get all the movies with a certain title
    // lop through all of the movie objects
    // delete every movei object
    let searchedMovies = await axios.get('http://localhost:3000/movies?title=' + movieTitle);
    let movies = searchedMovies.data;

    movies.forEach(movie => {
        axios.delete('http://localhost:3000/movies/' + movie.id);
    });
}

// deleteMovie('The Shape of Things');




async function deleteMoviePromised(movieTitle) {
    // Get all the movies with a certain title
    // lop through all of the movie objects
    // delete every movei object
    let searchedMovies = await axios.get('http://localhost:3000/movies?title=' + movieTitle);
    let movies = searchedMovies.data;
    let deletePromises = [];

    movies.forEach(movie => {
        deletePromises.push(axios.delete('http://localhost:3000/movies/' + movie.id));
    });
    return Promise.all(deletePromises);

}

(async () => {
    await deleteMoviePromised('The Shape of Things')
    let movieList = await axios.get('http://localhost:3000/movies');
    console.log(movieList.data);
})();