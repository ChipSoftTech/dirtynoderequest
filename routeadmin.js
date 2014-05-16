var url = require('url');
var helpers = require('./requesthelpers');

function process (request, response) {  
    //console.log("Route Process: admin");
    //Process querystring parameters
    //example here is to use for prefilling the form
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    var html = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    helpers.header() + 
    '<p>This is Admin</p>' +
    helpers.footer() +
    '</body>' +
    '</html>';

    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write(html);
    response.end();
}


exports.process = process;