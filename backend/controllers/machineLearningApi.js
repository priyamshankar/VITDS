module.exports.demoData = async (req,res,next)=>{
    try{
        const data = req.body;
        return res.json({msg: "not any threat"});
    }catch(e){
        next(e);
    }
}