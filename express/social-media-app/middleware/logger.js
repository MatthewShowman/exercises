let logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    req.user = 'Matthew';
    next();
}

module.exports = logger;