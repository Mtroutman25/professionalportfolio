var express = require("express");
var path = require("path");
var router = express.Router();



router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
    console.log(__dirname);

});


router.get('/portfolio', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/portfolio.html"));
});

router.get('/resume', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/resume.html"));
});

router.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/contact.html"));
});





module.exports = router;