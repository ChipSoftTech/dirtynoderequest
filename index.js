var server = require("./server");
var router = require("./router");
var handler = require("./requesthandler");

server.start(router.route, handler);
console.log("Index finished.");
