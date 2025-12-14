/*
* File: index.js
* Author: Nagy Imre
* Copyright: 2025, Nagy Imre
* Group: Szoft II-E
* Date: 2025-12-14
* Github: https://github.com/nagy-imre
* Licenc: MIT
*/
import express from 'express';
import apiRouter from './routes/api.js';

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

export default app;
