var router = require('express').Router();

router.get('/', function(req, res, next){
  res.render('user');
});

module.exports = router;
