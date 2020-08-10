var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  let result = req.body.a + req.body.b;
  res.send(`${result}`);
});
router.post("/two", function (req, res, next) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  let result = req.body.a * req.body.b;
  res.send(`${result}`);
});

module.exports = router;
