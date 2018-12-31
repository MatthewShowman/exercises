// I'm not sure this should be a controller
// I may need something more akin to the utilities in the express-homework assignment.

const Shoe = require('../models/shoe.model');

exports.shoeById =  async (req, res, next) => {
    let shoe = await Shoe.findById(req.params.id);
    res.render ('view-item', { shoe });
}