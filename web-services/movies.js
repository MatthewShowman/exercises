const http = require('http');
const url = require('url');

const movies = [
    { title: 'Die Hard' },
    { title: 'Mars Attacks' },
    { title: 'Plan 9 from Outter Space' },
    { title: 'The Great Muppet Caper' }
];

const server = http.createServer((req, res) => {
    // console.log(req.headers);
    // console.log(req.url);

    let urlObj = url.parse(req.url, true); // Breaks down the url into its various components
    // console.log(urlObj.query);
    console.log(req.method);


    if (urlObj.pathname === '/movies' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'blah': 'blahValue',
        }); // status code, object list of headers

        if (urlObj.query.title) {
            let filteredMovies = movies.filter(
                movie => movie.title === urlObj.query.title
            );
            res.end(JSON.stringify(filteredMovies));
        } else {
            res.end(JSON.stringify(movies));
        }
    } else if (rlObj.pathname === '/movies' && req.method === 'POST') {
        // TODO Add the movie to our array
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(3001);
console.log('Listening on port 3001...');