//--------------Requirements-------------//

require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , checkUserSession = require('./middleware/checkUserSession')
    , ctrl = require('./controller');
const app = express();

//--------------DotEnv----------//


app.use(checkUserSession)

const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
} = process.env;

//--------------Middleware-------------//

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
});

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));


//--------------Endpoints-------------//
app.post('/api/login', ctrl.loginUser)
app.post('/api/register', ctrl.registerUser)

//--------------Listening-------------//

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});




