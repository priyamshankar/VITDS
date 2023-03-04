const router = require("express").Router();
const {demoData} = require("../controllers/machineLearningApi");

router.post("/ifthreat", demoData); // if the route is furhter "/ifthreat" then return the data as demodata 

module.exports = router;