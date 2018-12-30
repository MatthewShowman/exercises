const Shoe = require('../models/shoe.model');

exports.shoeById =  async (req, res, next) => {
    let shoe = await Shoe.findById(req.params.id);
    res.render ('view-item', { shoe });
}