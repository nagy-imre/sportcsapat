import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // a projekt gyökerébe fogja létrehozni
  logging: false,
});

export default sequelize;
