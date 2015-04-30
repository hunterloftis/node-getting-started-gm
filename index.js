var express = require('express');
var gm = require('gm');
var path = require('path');

var PORT = process.env.PORT || 3000;

express()
  .use(express.static(__dirname))
  .use(createImage)
  .listen(PORT, onListen);

function onListen(err) {
  console.log('Listening on', PORT);
}

function createImage(req, res, next) {
  var file = path.join(__dirname, 'img.png');
  var text = req.query.text || 'hello, world!';
  gm(525, 110, "#00ff55aa")
    .fontSize(68)
    .stroke("#efe", 2)
    .fill("#555")
    .drawText(20, 72, text)
    .write(file, function(err){
      if (err) throw err;
      res.send('<html><img src="/img.png"></html>');
    });
}
