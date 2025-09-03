import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import router from './src/router';

const app = express();

app.use(express.json())

app.use('/api', router)

app.use(express.static('../frontend/dist'));

app.listen(5174, () => {console.log('Server started')})