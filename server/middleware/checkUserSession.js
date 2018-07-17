module.exports = function (req, res, next) {
    console.log(req.session)
    if (!req.session.user) {
        req.session.user = { sessionID: '', userID: '', email: '' }
    }
    next()
}