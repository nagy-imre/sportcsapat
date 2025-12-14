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
