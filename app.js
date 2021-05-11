const http = require('http');
const express = require('express');

const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/hot', (req, res) => {
    res.render('hot');
});
app.get('/blog', (req, res) => {
    res.render('blog');
});

app.listen(process.env.PORT || 5000);