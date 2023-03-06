// requiring 3rd party packages
const express = require('express');
const bodyParser = require('body-parser');

// requiring internal packages
const path = require('path');

// Importing helpers
const rootDirectory = require('./helpers/path');

// importing routers
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

// creating an express app
const app = express(); 

// registering a middleware for parsing req.body
app.use(bodyParser.urlencoded({extended: false}));

// middleware for serving static files
// with this, we can serve files from 'public' folder
app.use(express.static(path.join(__dirname, 'public'))); 

// registering routes on app
app.use('/admin', adminRouter); // filters for '/admin' on URL
app.use(shopRouter);

// This is a "catch all" middleware
// will trigger for any request whose path does not match
// any route registered
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// app listens on PORT 3000
app.listen(3000);