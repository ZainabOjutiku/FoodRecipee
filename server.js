var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(express.static( __dirname + '/public/dist/public' ));
mongoose.connect('mongodb://localhost/food_recipee');
app.get("/", function(req,res){
    res.render("index")
})




// require('./server/config/routes.js')(app)
// mongoose.connect('mongodb://localhost/Food_recipee', { userNewUrlParser: true});

app.listen(9000, function() {
    console.log("listening on port 8000");
})
