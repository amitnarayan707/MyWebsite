const express = require('express');
const router = express();

router.get('/', (req, res) => {
res.render('about',{css:"about"});
});


module.exports = router;