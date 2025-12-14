/**
 * Név: Nagy Imre
 * Dátum: 2025-12-14
 * Csoport: XY
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
