module.exports.demoData = async (req,res,next)=>{
    try{
        const data = req.body;
        return res.json({msg: "true"});
    }catch(e){
        next(e);
    }
}

//note: this has no significance in the code base, just for understanding purposes