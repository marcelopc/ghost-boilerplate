module.exports = function(req,res,next){
	res.locals.title = "Welcome!"
	next();
}