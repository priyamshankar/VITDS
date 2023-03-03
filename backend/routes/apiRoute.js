const router = require("express").Router();
const {demoData} = require("../controllers/machineLearningApi");

router.post("/ifthreat", demoData);

module.exports = router;