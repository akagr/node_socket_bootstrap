var router = require('express').Router();

router.get('/', function(req, res, next){
  res.send('This is home view');
});

module.exports = router;
