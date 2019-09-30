require('./models/db');

const express = require('express');
const mongoose = require('mongoose');
const engines = require('consolidate');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));




app.engine('html',engines.nunjucks);
app.set('view engine','html');
app.set('views',__dirname + '/views');


app.use('/', require('./routes/index'));

/*app.get('/delete', (delete , onclick) => {
    this.id.splice;
});*/



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log ('server is running at port ' + PORT));