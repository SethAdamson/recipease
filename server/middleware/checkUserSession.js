module.exports = function (req, res, next) {
    if (!req.session.user) {
        res.session.user = { sessionID: '', userID: '', email: '' }
    }
    next()
}