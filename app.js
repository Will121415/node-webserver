const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico
app.use( express.static('public'));


// Rutas
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Curso de Node',
    name: 'Willinton Mora'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    title: 'Curso de Node',
    name: 'Willinton Mora'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    title: 'Curso de Node',
    name: 'Willinton Mora'
  })
})

app.get('*', (req, res) => {
  res.send('404 | Not Found')
})

app.listen(port, () => {
  console.log(`Webserver app listening on port ${port}`)
})