const Customer = require('../models/customer.model');

exports.listPage = async (req, res) => {
    let customers = await Customer.find({});
    let environment = PROCESS.env.MYAPP_ENV || "development";
    res.render('list', {customers, environment});
}

exports.addPage = async (req, res) => {
    let customer;
    
    if (req.query.CustomerId) {
            customer = await Customer.findById(req.query.CustomerId);
    }
    res.render('add', { customer });
}

exports.addCustomer = async (req, res) => {
    try {
        if (req.body.CustomerId) {
            // await Customer.findOneAndUpdate( "_id": req.body.CustomerId, req.body);
            await Customer.findByIdAndUpdate(req.body.CustomerId, req.body)
        } else {
            let customer = new Customer(req.body)
            await customer.save();
        }
        res.redirect('/');
    }
    catch (error) {
        res.status(500).render('add', { error: 'Something went wrong' });
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        // await Customer.findOneAndDelete( "_id": req.query.CustomerId);
        await Customer.findByIdAndDelete(req.query.CustomerId);
        res.redirect('/');
    }
    catch (error) {
        res.redirect('/', { error: 'Could not delete the customer'});
    }
}