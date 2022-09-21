const express = require('express');
const router = express();
const multer = require("multer")
const path = require("path")
const mongo = require("../modules/mondodb")


router.get('/', (req, res) => {
    if(res.statusCode == 200)
        res.render('home', { css: "home"});
    else res.send("404")
})

let storage = multer.diskStorage({
    destination: '../images' ,
    filename: (req, file, cb) => {
        let name = file.fieldname+"-"+Math.round(Math.random()*1e9)+"-"+Date.now()+path.extname(file.originalname)
        return cb(null,name)
    }
})

let upload = multer({ storage: storage }).single("profileImg");
//profile-image
router.post('/profile', (req, res) => {
    upload(req, res, (error) => {
        // const mongodb = new mongo();
        try {
            // mongodb.insertOne(req.file)
            res.json({msg:"Uploaded",url:req.file.filename})
            
        } catch (error) {
            req.json({msg:"error"})
        }


    })
})
//biography
router.post('/bio', (req, res) => {
    console.log(req.body);
})
module.exports = router;