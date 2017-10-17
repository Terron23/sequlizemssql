var express = require('express');
var router = express.Router();


router.get('/:name/:id', function(req, res){
   res.send('I am printing' + ' '+ req.params.name + ' ' + req.params.id);
});

router.post('/', function(req, res){
   res.send('POST route on things.');
});
//export this router to use in our index.js
module.exports = router;