const express = require('express');
const fs  = require('fs')


module.exports.mainPage = function(req, res){
    fs.readFile('dummy.txt', function(err, data) {
        if(err){
            console.log(err);
            return res.end()
        }
        res.writeHead(200, {'Content-Type': 'text'});
        res.write(data);
        return res.end();
    })
}