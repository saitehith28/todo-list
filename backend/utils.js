const requestLogger = (req, res, next) => {
    console.log('---');
    console.log('METHOD', req.method);
    console.log('URL', req.url);
    console.log('body', req.body);

    next();
}

module.exports = {
    requestLogger
};