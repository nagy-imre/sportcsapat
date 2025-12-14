/*
* File: index.js
* Author: Nagy Imre
* Copyright: 2025, Nagy Imre
* Group: Szoft II-E
* Date: 2025-12-14
* Github: https://github.com/nagy-imre
* Licenc: MIT
*/

import sequelize from '../config/database.js';
import TeamModel from './team.js';
import PlayerModel from './player.js';

export const Team = TeamModel(sequelize);
export const Player = PlayerModel(sequelize);

export { sequelize };