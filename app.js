const express = require('express');
const app = express();
const path = require('path');
const request = require('request');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/home', (req, res) => {



  request('https://api.covid19india.org/data.json', (error, response, body) => {

    if (error) {
      console.log(error);
    }

    let data = JSON.parse(body);
    res.render('index', { data: data });


  });

});

app.get('/results' ,(req , res) =>{
      res.render('results');
});
app.listen('3000', () => {
  console.log('Server Started at port 3000');
});



