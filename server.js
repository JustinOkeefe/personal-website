/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//Might use MongoDB later
//const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
//config
const config = require('./server/config');

/*
 |--------------------------------------
 | Put MongoDB here for later date
 |--------------------------------------
 */

/*
 |--------------------------------------
 | App
 |--------------------------------------
 */

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());

// Set port
const port = process.env.PORT || '8083';
app.set('port', port);

// Set static path to Angular app in dist
// Don't run in dev
if (process.env.NODE_ENV !== 'dev') {
  app.use('/', express.static(path.join(__dirname, './dist')));
}

require('./server/api')(app, config);

// Pass routing to Angular app
// Don't run in dev
if (process.env.NODE_ENV !== 'dev') {
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });
}

/*
 |--------------------------------------
 | Server
 |--------------------------------------
 */

app.listen(port, () => console.log(`Server running on localhost:${port}`));