const express = require('express');
const app = express();
const morgan = require('morgan');
//registrer view engines
app.set('view engine', 'ejs');
//listen for requets
app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) =>{
    res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) =>{
    res.render('about');
});

app.get('/blogs', (req, res) =>{
    res.render('blogs');
});

app.use((req, res) =>{
    res.status(404).render('404.html');
});