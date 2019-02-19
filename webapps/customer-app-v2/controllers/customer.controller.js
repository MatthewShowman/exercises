const Customer = require('../models/customer.model');

exports.listPage = async (req, res) => {
  let customers = await Customer.find({});
  let environment = process.env.MYAPP_ENV || "development";

  res.render('list', { customers, environment });
}

exports.addPage = async (req, res) => {
  let customer;

  if (req.query.customerId) {
    customer = await Customer.findById(req.query.customerId);
  }

  res.render('add', { customer });
}

exports.addCustomer = async (req, res) => {
  try {
    if (req.body.customerId) {
      await Customer.findByIdAndUpdate(req.body.customerId, req.body);
    }
    else {
      let customer = new Customer(req.body);
      await customer.save();
    }
    res.redirect("/");
  }
  catch (error) {
    res.render('add', { error: "Something went wrong" });
  }
}

exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.query.customerId);
    res.redirect("/");
  }
  catch(error) {
    res.redirect("/", { error: "Could not delete the customer." });
  }
}