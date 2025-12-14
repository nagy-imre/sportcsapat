import dotenvFlow from 'dotenv-flow';
import app from './app.js';
import { sequelize } from './models/index.js';

dotenvFlow.config();

const PORT = Number(process.env.APP_PORT) || 8000;

await sequelize.sync();

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
