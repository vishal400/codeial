const express = require("express");
const app = express();
const PORT = 8000;

app.use('/', require('./routes'));

// setup view engine
app.set('view engine', 'ejs');
app.set('view', './views');

app.listen(PORT, function (err) {
    if (err) {
        console.log(`Error: ${PORT}`);
        return;
    }

    console.log(`Server is up and running on port: ${PORT}`);
});
