const express = require('express');
const router = express();

router.get('/', (req, res) => {
res.render('portfolio',{css:"portfolio"});
});


module.exports = router;