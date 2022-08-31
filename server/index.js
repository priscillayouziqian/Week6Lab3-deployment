const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '../client')));

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