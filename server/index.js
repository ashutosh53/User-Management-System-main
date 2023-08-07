import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import Routes from './routes/route.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded( { extended: true }));
app.use(cors());
app.use('/', Routes);

const PORT = 8000;

mongoose.connect("mongodb://0.0.0.0:27017/user-management", { useNewUrlParser: true, useUnifiedTopology: true } )
.then( () => console.log("Connection Successful"))
.catch( (err) => console.log(err) );

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));