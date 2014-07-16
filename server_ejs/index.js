var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    settings = require('./setting'),
    server = http.createServer(),
    template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8'),
    n = 0;

server.on('request', function(req, res) {
  n++;
  var data = ejs.render(template, {
    title: 'hello',
    content: '<strong>World</strong>',
    n: n
  })
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
});

server.listen(settings.port, settings.host);

console.log('server listening...');
