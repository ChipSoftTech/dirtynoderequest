var url = require('url');
var fs = require("fs");
var formidable = require("formidable");
var helpers = require("./requestHelpers");

function process (request, response) {
    //surpress 
  response.end();
}


exports.process = process;