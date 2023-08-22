module.exports.profile = function(req, res){
    return res.end('<h1>This is profile page</h1>');
}

module.exports.user = function(req, res){
    return res.end('<h1>User page</h1>');
}