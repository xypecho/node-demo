exports.showIndex = function(req, res){
	res.end('这是首页');
}
exports.showStudent = function(req, res){
	res.end('这是学生');
}
let show404 = function(req, res){
	res.end('404 not found');
}
exports.show404 = show404;