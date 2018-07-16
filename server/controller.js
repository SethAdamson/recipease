const bcrypt = require('../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/bcryptjs')
var sessionIDCount = 1;

module.exports = {
    registerUser: (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        db.checkEmail([email]).then(user => {
            console.log(user)
            if (user.length !== 0) {
                res.status(200).send('email taken. Try another.')
            } else {
                const salt = bcrypt.genSaltSync(10)
                console.log('salt: ', salt)
                const hash = bcrypt.hashSync(password, salt)
                console.log('hash: ', hash)

                db.registerUser([email, hash]).then((user) => {
                    req.session.user.sessionID = sessionIDCount
                    sessionIDCount++
                    req.session.user.userID = user[0].userID
                    req.session.user.email = user[0].email
                    console.log('registered: ', req.session)
                    res.status(200).send(user)
                })
            }
        })
    },
    loginUser: (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        db.checkEmail([email]).then(user => {
            if (user.length !== 0) {
                const validPassword = bcrypt.compareSync(password, user[0].password)
                if (validPassword) {
                    req.session.user.sessionID = sessionIDCount
                    sessionIDCount++
                    req.session.user.userID = user[0].userID
                    req.session.user.email = user[0].email
                    res.status(200).send(user)
                    console.log(req.session.user)
                } else {
                    res.status(200).send('Invalid Password')
                }
            } else {
                res.status(200).send('User does not exist')
            }
        })
    },
}