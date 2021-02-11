var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var calculator = require("../tests/calculator.js");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", function (req, res) {
 try {
  var count       = "";
  const birthYear = parseInt(req.query.birthYear);
  const ageWork   = parseInt(req.query.ageWork);
  
  if (undefined == birthYear || undefined == ageWork) {
    res.status(500).send({message: "les params ne sont pas définit"});
  }
  console.log(birthYear);
  console.log(ageWork);

  count = calculator(birthYear, ageWork);
  res.status(200).send({count: count});
 } catch(e) {
   res.status(500).send({message: e});
 }
});

module.exports = router;
