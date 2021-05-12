const http = require('http');
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use(expressLayout);

//Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req,res) => {
    res.render('index');
});

app.get('/hot', (req, res) => {
    res.render('hot');
});
app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/home_made', (req, res) => {
    res.render('home_made');
});

//app.listen(process.env.PORT || 5000);


app.listen(5000, () => console.info('Listening on port 5000'));