const express = require('express');
const router = express();
const db = require('../../modules/mondodb.js')

router.get('/', (req, res) => {
res.send("ok");
});


module.exports = router;