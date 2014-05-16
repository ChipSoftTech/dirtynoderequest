var handler = require("./requesthandler");

function route(handle, pathname, request, response) {
    //console.log("About to route a request for " + pathname);
    return handler.handle(request, response, pathname);    
}

exports.route = route;