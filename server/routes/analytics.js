const express = require('express');
const path = require("path")
const router = express();

router.get('/', (req, res) => {
    if (res.statusCode==200)
    res.render('analytics',{css:"analytics"});
    else res.send("404")
});
router.get('/employee', (req, res) => {
    let options ={root:path.join(__dirname,"../testData")}
    res.sendFile('employee.json',options)
})


module.exports = router;