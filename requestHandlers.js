var fun = require("./requestFunctions");

function faviconico(response) {
  // Suppress favicon, uncomment to see during each call
  //response.writeHead(200, {"Context-Type": "text/plain"});
  //response.write("Hello favicon");
  response.end();
}

function contentheader(response) {
  console.log("Request handler 'content header' was called.");
  var html = fun.header();

  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write(html);
  response.end();
}

function contentfooter(response) {
  console.log("Request handler 'content footer' was called.");
  var html = fun.footer();

  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write(html);
  response.end();
}

function start(response) {
  console.log("Request handler 'start' was called.");
  response.writeHead(200, {"Context-Type": "text/plain"});
  
  var html = fun.header() + 
      "<p>Hello Start</p>";
  
  response.write(html);
  response.end();
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Context-Type": "text/plain"});
  
  var html = fun.header() + 
      "<p>Hello Upload</p>";
  
  response.write(html);
  response.end();
}

exports.faviconico = faviconico;
exports.start = start;
exports.contentheader = contentheader;
exports.contentfooter = contentfooter;
exports.upload = upload;