//Requiring express
const express = require('express');
const verifyDate = require('./middleware.js');

//creating n instance of express
const app = express();
app.use(express.json());
app.set('view engine', 'pug');
app.set('views', './Pages');

//Creating a port
const PORT =  5000;

//Creating a server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.all('/error', (req, res) => {
res.status(404).send('Error 404: Page not found');
});

app.use(verifyDate);
//Creating a route
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/services', (req, res) => {
    res.render('services');
});
app.get('/contact', (req, res) => {
    res.render('contactus');
});
