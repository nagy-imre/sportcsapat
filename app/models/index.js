import sequelize from '../config/database.js';
import TeamModel from './team.js';
import PlayerModel from './player.js';

export const Team = TeamModel(sequelize);
export const Player = PlayerModel(sequelize);

export { sequelize };