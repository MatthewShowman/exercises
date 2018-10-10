function get(url) {
    console.log('Mock request to ' + url);
}

function post(url) {
    console.log('A second mock request to ' + url);
}

module.exports = {
    get,
    post,
    myString: "blah blah blah",
 }


 ////////

 let Axios = {};

 Axios.get = function get(url) {

 }

 Axios.post = function post(url) {

 }

 module.exports = Axios;