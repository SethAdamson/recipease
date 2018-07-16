//--------------Requirements-------------//

require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , ctrl = require('./controller');
const app = express();

//--------------DotEnv----------//

const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
} = process.env;

//--------------Middleware-------------//

// app.use(express.static(`${__dirname}/../build`));

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



//--------------Listening-------------//

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});




