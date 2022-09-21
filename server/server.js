require("dotenv").config();
const express = require('express');
const path = require('path')
const ejs = require('ejs');
const ejsLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const cors = require('cors')
const app =  express();


const port = process.env.PORT || 8080

//cors
const corsOption = {
    origin: 'http:\\127.0.0.1:3000',
    optionSuccessStatus: 200
}

//view engine
app.set('views', path.join(__dirname, 'views'));
app.use(ejsLayouts);
app.set('view engine', 'ejs');

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//statics
app.use(express.static('public'));
app.use("/css", express.static("style"));
app.use("/image", express.static("../images"));
app.use("/js", express.static("js"));

app.use("/sign", require("./routes/signin"))

//routes
app.use('/', require('./routes/home'));
app.use('/portfolio', require('./routes/portfolio'));
app.use('/about', require('./routes/about'));
app.use('/analytics', require('./routes/analytics'));
app.use('/setting', require('./routes/setting'));
//api
app.use('/api/',cors(corsOption),require('./routes/api/home'))
// app.use('/api/',cors(corsOption),require('./routes/api/gallery'))
// app.use('/api/',cors(corsOption),require('./routes/api/folio'))


app.listen(port, () => {
console.log(`server is running at port=http://127.0.0.1:${port}`);
});