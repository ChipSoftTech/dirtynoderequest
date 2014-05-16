var url = require('url');

function header() {
  var html = "<p>Content Header</p>";
  return html;
}

function footer() {
  var html = "<p>Content Footer</p>";
  return html;
}

function process (request, response) {
  //Process querystring parameters
  //example here is to use for prefilling the form
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  
  var html = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<p>Welcome to the Home Page</p>' +
    '</body>' +
    '</html>';

  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write(html);
  response.end();
}


exports.process = process;