﻿var http = require('http'),
    util = require('util');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    var body = util.format("<a href='%s' >Click</a>", "http://www.google.com")
    
    var rest = '<?xml version="1.0" encoding="UTF-8"?>' +
 "<tile>  " + 
      "<visual lang = 'en-US' version='2'>" +
        "<binding template='TileSquare150x150PeekImageAndText04' branding='name'>" +
        "<image id='1' src='http://contoso.com/images/firstImage.jpg'/>" +
        "<text id='1'>First image</text> " +
        "</binding>" +
        "<binding template='TileWide310x150ImageAndText01' branding='name'>" +
        "<image id='1' src='http://contoso.com/images/firstImage.jpg'/>" +
        "<text id='1'>First image</text> " +
        "</binding>" +
        "<binding template='TileSquare310x310SmallImagesAndTextList01' branding='name'>" +
        "<image id='1' src='http://contoso.com/images/firstImage.jpg'/>" +
        "<image id='2' src='http://contoso.com/images/secondImage.jpg'/> " +
        "<image id='3' src='http://contoso.com/images/thirdImage.jpg'/>" +
        "<text id='1'>Title Text 1</text>" +
        "<text id='2'>Body Text 1.1</text>" +
        "<text id='3'>Body Text 1.2</text>" +
        "<text id='4'>Title Text 2</text>" +
        "<text id='5'>Body Text 2.1</text>" +
        "<text id='6'>Body Text 2.2</text>" +
        "<text id='7'>Title Text 3</text>" +
        "<text id='8'>Body Text 3.1</text>" +
        "<text id='9'>Body Text 3.2</text>" +
        "</binding>" +
    "</visual>" +
"</tile>"    ;
    

    body += "Hello World";
    var header = "";
    res.end(rest);
    //res.end( '<!DOCTYPE html>' 
    //   + '<html><header>' + header + '</header><body>' + rest + '</body></html>');
    

}).listen(port);