const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/users", { useNewUrlParser: true, useUnifiedTopology: true } )
.then( () => console.log("Connection Successful"))
.catch( (err) => console.log(err) );