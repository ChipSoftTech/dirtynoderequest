var process = require("./requestProcess");

function faviconico(request, response) {
  // Suppress favicon, uncomment to see during each call
  //response.writeHead(200, {"Context-Type": "text/plain"});
  //response.write("Hello favicon");
  response.end();
}

function contentheader(request, response) {
  console.log("Request handler 'content header' was called.");  
  process.header(request, response);
}

function contentfooter(request, response) {
  console.log("Request handler 'content footer' was called.");
  process.footer(request, response);
}

function start(request, response) {
  console.log("Request handler 'start' was called.");  
  process.start(request, response);  
}

function upload(request, response) {
  console.log("Request handler 'upload' was called.");
  process.upload(request, response);
}

exports.faviconico = faviconico;
exports.start = start;
exports.contentheader = contentheader;
exports.contentfooter = contentfooter;
exports.upload = upload;