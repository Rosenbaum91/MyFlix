const express = require('express');
// importing morgan
morgan = require('morgan');
// declaring that variable app = deploy express() function
const app = express();
fs = require('fs');
path = require('path');

// creating a write stream to go to log.txt
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: 'a' })

// use requests
// setting up logger with morgan
app.use(morgan('common', { stream: accessLogStream }));
app.use(express.static('public'));

// Top 10 Movies
let topMovies = [
  {
    title: 'Ant-Man And The Wasp - Quantumania',
    director: 'Peyton Reed'
  },
  {
    title: 'Knock At The Cabin',
    director: 'M. Night Shyamalan'
  },
  {
    title: 'Batman',
    director: 'Tim Burton'
    },
   {
    title: 'Kung Pow! Enter the Fist',
    director: 'Steve Oedekerk'
    },
    {
    title: 'Scary Movie',
    author: 'Keenen Ivory Wayans'
    },
     {
    title: 'Joker',
    author: 'Todd Phillips'
    },
       {
    title: 'M3gan',
    author: 'Gerard Johnstone'
    },
    {
    title: 'Sleepwalkers',
    author: 'Mick Garris'
    },
    {
    title: 'Wrong Turn',
    author: 'Rob Schmidt'
    },
    {
    title: 'Joe Dirt',
    author: 'Dennie Gordon'
    }    
];

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/', (req, res) => {
  res.send('This is my practice for backend development.');
});

app.use(express.static('public'));

app.use(morgan('common'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});