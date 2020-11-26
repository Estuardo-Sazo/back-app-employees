const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-employess', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is Connect'))
    .catch(err => console.error(err));