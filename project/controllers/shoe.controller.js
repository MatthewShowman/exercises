const Shoe = require('../models/shoe.model');

exports.shoesByGender = async (req, res, next) => {
    let shoes; // Why is this variable seemingly not being called?
    
    if (req.query.gender) {
        shoes = await Shoe.find({});
        next();
    }
}

exports.shoesByType = async (req, res, next) => {
    let shoes;
    
    if (req.query.type) {
        shoes = await Shoe.find({});
        next();
    }
}