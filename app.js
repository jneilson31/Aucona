var express = require("express");
var app = express();
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
// app.use(express.static(__dirname + '/public'));
app.use(express.static("public"))
app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/1800rma", function (req, res) {
    res.render("1800rma");
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/bandrebrand", function (req, res) {
    res.render("bandrebrand");
});

app.get("/centsible", function (req, res) {
    res.render("centsible");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.get("/divvypay", function (req, res) {
    res.render("divvypay");
});

app.get("/eggscape", function (req, res) {
    res.render("eggscape");
});

app.get("/mnn", function (req, res) {
    res.render("mnn"); 
});

app.get("/skills", function (req, res) {
    res.render("skills");
});

app.get("/themastershand", function (req, res) {
    res.render("themastershand");
});

app.get("/typography", function (req, res) {
    res.render("typography");
});

app.get("/warontartar", function (req, res) {
    res.render("warontartar");
});

app.get("/weddinginvites", function (req, res) {
    res.render("weddinginvites");
});

app.get("/work", function (req, res) {
    res.render("work");
});

app.post("/contact", function (req, res) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jeremyneilson31@gmail.com',
            pass: 'oyxrxguzfbjvpgmx'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: req.body.email,
        to: 'jeremyneilson31@gmail.com',
        subject: req.body.name + " - " + req.body.subject + " - " + req.body.email,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
   
res.redirect("contact");

});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server started");
});

// app.listen(3000, function () {
//     console.log("Server started");
// });