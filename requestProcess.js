var url = require('url');
var fs = require("fs");
var formidable = require("formidable");
var helpers = require("./requestHelpers");

function header() {
  var html = "<p>Content Header</p>";
  return html;
}

function footer() {
  var html = "<p>Content Footer</p>";
  return html;
}

function contextheader(request, response) {
  var html = header();
  
  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write(html);
  response.end();
}

function contextfooter(request, response) {
  var html = footer();
  
  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write(html);
  response.end();
}

function start(request, response) {
  //Process querystring parameters
  //example here is to use for prefilling the form
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  
  var html = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
    '</head>' +
    '<body>' +
      header() +
      '<form action="/upload" method="post">' +
      '<b>Subject</b>: <input type="text" name="mysubject" value="' + (query.mysubject || '') + '"><br>' + 
      '<b>Body</b>: <br><textarea name="mybody" rows="20" cols="60"></textarea>' +
      '<br />' +
      '<input type="submit" value="Submit text" />' +
      '</form>' +
      footer() +
    '</body>' +
    '</html>';

  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write(html);
  response.end();
}

function upload(request, response) {
  //Process form parameters
  //Need to use the anonymouse callback to avoid
  //blocking calls for large payloads and images
  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    
    if(error) {
      console.log("No request handler found for " + pathname);
      response.writeHead(422, {"Context-Type": "text/plain"});
      response.write("422 Unprocessable Entity");
      response.end();    
    }
    
    var html = 
      '<html>' +
      '<head>' +
      '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
      '</head>' +
      '<body>' +
        header() +
        '<p>You sent Subject: <br>' +
        fields.mysubject + '</p>' +
        '<p>You sent Body: <br>' +
        fields.mybody + '</p>' +      
        footer() +
      '</body>' +
      '</html>';
  
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write(html);
    response.end(); 
  })
  
  console.log("upload done");
}

exports.header = contextheader;
exports.footer = contextfooter;
exports.start = start;
exports.upload = upload;