const router = require ("express").Router();

// router.post("/check","check page to see is the router is working or not.");
router.get('/',(req,res)=>{
    res.send("hello world")
});

module.exports = router;