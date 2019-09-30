const mongoose = require('mongoose');
// var url = "mongodb://localhost:27017/admin";

mongoose.connect('mongodb://localhost:27017/Task',{ useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log('MongoDb connection succeeded.')
        // console.log(url);
    }
    else {
        console.log('Error in db connection: ' + err)
    }
});


module.exports = mongoose;

