const express = require('express');
const path = require('path');

const app = express();

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '50b4a9d0111a43d5ab0d61aa2e90ece7',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use('/', express.static(path.join(__dirname, '../client')));

try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }

// app.use('/js', express.static(path.join(__dirname, 'public/main.js')))

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../index.html'));
// });

// app.get('/css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/style.css'))
//   });
  


//get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will use port 4005.
const port = process.env.PORT || 5068; //??make new port number???

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})