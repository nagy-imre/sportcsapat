import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Player = sequelize.define('player', {
    name: { type: DataTypes.STRING,  allowNull: false  }
})

export default Player
