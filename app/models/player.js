/*
* File: index.js
* Author: Nagy Imre
* Copyright: 2025, Nagy Imre
* Group: Szoft II-E
* Date: 2025-12-14
* Github: https://github.com/nagy-imre
* Licenc: MIT
*/

import { DataTypes } from 'sequelize';

export default function PlayerModel(sequelize) {
  return sequelize.define(
    'Player',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'players',
      timestamps: false,
    }
  );
}
