/* eslint-disable */
const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config.dev');


/* eslint-disable no-console */

const bodyParser = require('body-parser');
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src/styles')));
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(express.static(__dirname + '../src'));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));

});



app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is listening on port: " + port)
    //open(`http://localhost:${port}`);
  }
});
