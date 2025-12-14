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

export default function TeamModel(sequelize) {
  return sequelize.define(
    'Team',
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
      tableName: 'teams',
      timestamps: false,
    }
  );
}
