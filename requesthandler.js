function handle(request, response, pathname) {
    //console.log("Request handler was called: " + pathname);

    try {
        //console.log("./route" + pathname.toLowerCase().replace(new RegExp('/', 'g'), ''));
        var route = require("./route" + pathname.toLowerCase().replace(new RegExp('/', 'g'), ''));
    } catch (e) {
        console.log("No route found for: " + "./route" + pathname.toLowerCase().replace(new RegExp('/', 'g'), ''));
        response.writeHead(404, {"Context-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();        
    }

    try {
        //console.log('process: ' + pathname);
        route.process(request, response);
    } catch (e) {
        console.log("Error processing route: " + pathname);
        console.log("Filename: ./route" + pathname.replace(new RegExp('/', 'g'), ''));
        response.writeHead(500, {"Context-Type": "text/plain"});
        response.write("500 Internal Server Error");
        response.end();     
    }
}

exports.handle = handle;