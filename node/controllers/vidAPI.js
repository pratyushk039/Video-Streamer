fs = require('fs');

module.exports.vidAPI = function(req,res){
    return res.status(200).send('Hello!');
}