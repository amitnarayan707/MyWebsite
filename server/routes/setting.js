const express = require('express');
const router = express();

router.get('/', (req, res) => {
res.render('setting',{css:"setting"});
});


module.exports = router;