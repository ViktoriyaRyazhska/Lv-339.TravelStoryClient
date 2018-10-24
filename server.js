//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '/dist')));
app.get('*', function(req, res) {
  res.sendFile(__dirname, path.join('index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

