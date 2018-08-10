export default (req,res,next)=>{
	res.locals.title = "Welcome!";
	next();
};