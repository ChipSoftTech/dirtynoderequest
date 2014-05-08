var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/favicon.ico"] = requestHandlers.faviconico;
handle["/content/header"] = requestHandlers.contentheader;
handle["/content/footer"] = requestHandlers.contentfooter;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


server.start(router.route, handle);

console.log("Index finished.");
