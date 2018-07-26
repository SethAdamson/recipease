const bcrypt = require('bcryptjs')
var sessionIDCount = 1;

module.exports = {
    registerUser: (req, res) => {
        const { userID, username, email, password } = req.body
        const db = req.app.get('db')
        db.checkEmail([email]).then(user => {
            console.log(user);
            if (user.length !== 0) {
                res.status(200).send('email taken. Try another.')
            } else {
                const salt = bcrypt.genSaltSync(10)
                console.log('salt: ', salt)
                const hash = bcrypt.hashSync(password, salt)
                console.log('hash: ', hash)

                db.registerUser([username, email, hash]).then((user) => {
                    let s = req.session.user;
                    s.sessionID = sessionIDCount
                    sessionIDCount++
                    s.userID = user[0].userid
                    s.username = user[0].username;
                    s.email = user[0].email
                    console.log('registered: ', req.session)
                    res.status(200).send(s)
                })
                    .catch((e) => {
                        console.log(e);
                        res.status(500).send(e)
                    })
            }
        })
    },
    loginUser: (req, res) => {
        const { username, email, password } = req.body
        const db = req.app.get('db')
        db.checkEmail([email]).then(user => {
            if (user.length !== 0) {
                const validPassword = bcrypt.compareSync(password, user[0].password)
                if (validPassword) {
                    console.log(user)
                    let s = req.session.user;
                    s.sessionID = sessionIDCount;
                    sessionIDCount++;
                    s.userID = user[0].userid;
                    s.username = user[0].username;
                    s.email = user[0].email;
                    res.status(200).send(s);
                    console.log(req.session.user);
                } else {
                    res.status(200).send('Invalid Password')
                }
            } else {
                res.status(200).send('User does not exist')
            }
        })
            .catch((e) => {
                console.log(e);
                res.status(500).send(e)
            })
    },
    logout(req, res, next) {
        req.session.destroy()
            .catch((e) => {
                console.log(e);
                res.status(500).send(e)
            })
    },
    allRecipes: (req, res, next) => {
        const db = req.app.get('db');
        db.allRecipes()
            .then((recipes) => res.status(200).send(recipes))
            .catch((e) => {
                console.log(e)
                res.status(500).send(e)
            })
    },
    newRecipe: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body);
        const { name, steps, rating, prepTime, servings, cost, recipeImg, spoonID, ingredients, source, sourceURL } = req.body;
        db.newRecipe([name, steps, rating, prepTime, servings, cost, recipeImg, spoonID, ingredients, source, sourceURL])
            .then(() => res.status(200).send('added'))
            .catch((e) => {
                console.log(e);
                res.status(500).send(e)
            })
    },
    updateRecipe: (req, res, next) => {
        const db = req.app.get('db');
        const { name, steps, rating, prepT, serves, difLevel, cost, comments, img } = req.body;
        db.updateRecipe([name, steps, rating, prepT, serves, difLevel, cost, comments, img])
            .then(() => res.status(200).send())
            .catch((e) => {
                console.log(e)
                res.status(500).send(e)
            })
    },
    deleteRecipe: (req, res, next) => {
        const db = req.app.get('db');
        const { recipeID } = req.body;
        db.deleteRecipe([recipeID])
            .then(() => res.status(200).send())
            .catch((e) => {
                console.log(e)
                res.status(500).send(e)
            })
    },
    byCategory: (req, res, next) => {
        const db = req.app.get('db')
        db.bycategory()
            .then(cat => res.status(200).send(cat))
            .catch((e) => {
                console.log(e)
                res.status(500).send(e)
            })
    },
    addFav: (req, res, next) => {
        const db = req.app.get('db')
        const { userid, recipeid } = favItem
        db.addToFavs([userid, recipeid])
            .then(fav => res.status(200).send(fav))
            .catch((e) => {
                console.log(e)
                res.status(500).send(e)
            })
    },
    getFavs: (req, res, next) => {
        const db = req.app.get('db')
        const { userid } = req.body
        db.favorites([userid])
        .then((favs) => res.status(200).send(favs))
        .catch((e) => {
            console.log(e)
            res.status(500).send(e)
        })
    }
}
