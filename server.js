var express = require('express'); // Loading express on our server
var app = express(); // install express on our server
var hbs = require('hbs'); // loads handlebars

app.set("view engine", "hbs"); 
app.use(express.static(__dirname + '/public')); 

app.get('/', function(req, res){
    res.render('welcome', {

    })
});

app.get('/shows', function(req, res){
    var faveShows = ['Gilmore Girls', 'The Good Wife', 'SNL', 'Always Sunny'];

    res.render('shows', {
        data: faveShows
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('On port ' + port);
})