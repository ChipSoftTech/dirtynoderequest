var querystring = require("querystring");

function header() {
  var html = "<p>Content Header</p>";
  return html;
}

function footer() {
  var html = "<p>Content Footer</p>";
  return html;
}

function start() {
  var html = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
    '</head>' +
    '<body>' +
      header() +
      '<form action="/upload" method="post">' +
      '<b>Subject</b>: <input type="text" name="mysubject"><br>' + 
      '<b>Body</b>: <br><textarea name="mybody" rows="20" cols="60"></textarea>' +
      '<br />' +
      '<input type="submit" value="Submit text" />' +
      '</form>' +
      footer() +
    '</body>' +
    '</html>';
  
  return html;
}

function upload(postData) {
  var html = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
    '</head>' +
    '<body>' +
      header() +
      '<p>You sent Subject: <br>' +
      querystring.parse(postData).mysubject + '</p>' +
      '<p>You sent Body: <br>' +
      querystring.parse(postData).mybody + '</p>' +      
      footer() +
    '</body>' +
    '</html>';
  
  return html;        
}

exports.header = header;
exports.footer = footer;
exports.start = start;
exports.upload = upload;