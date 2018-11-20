const Puppy = require('./models/puppy.model');

function getPuppies () {

}

function getOnePuppy (id) {

}

function addOnePuppy () {

}

function deleteOnePuppy (id) {
    Puppy.findOneAndDelete( { _id: `${id}` } )
    .then( result => console.log('Deleted puppy', result));
}

function updateOnePuppyValue (id, property, newValue) {
    Puppy.updateOne( { _id: `${id}` }, { $set: {`${property}`: `${newValue}`} } )
    .then
}

module.exports = {
    deleteOnePuppy,
}