/*
* File: index.js
* Author: Nagy Imre
* Copyright: 2025, Nagy Imre
* Group: Szoft II-E
* Date: 2025-12-14
* Github: https://github.com/nagy-imre
* Licenc: MIT
*/

import dotenvFlow from 'dotenv-flow';
import app from './app.js';
import { sequelize } from './models/index.js';

dotenvFlow.config();

const PORT = Number(process.env.APP_PORT) || 8000;

await sequelize.sync();

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
