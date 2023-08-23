const express = require("express");
const app = express();
const PORT = 8000;
const ejsLayouts = require('express-ejs-layouts');

app.use(ejsLayouts);
// extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.static('./assets'))
app.use('/', require('./routes'));

// setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, function (err) {
    if (err) {
        console.log(`Error: ${PORT}`);
        return;
    }

    console.log(`Server is up and running on port: ${PORT}`);
});
