//--------------Requirements-------------//

require('../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/dotenv').config();
const express = require('../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/express')
    , session = require('../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/express-session')
    , massive = require('../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/massive')
    , bodyParser = require('../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/body-parser')
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
app.post('/api/login', ctrl.loginUser)
app.post('/api/register', ctrl.registerUser)

//--------------Listening-------------//

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});




