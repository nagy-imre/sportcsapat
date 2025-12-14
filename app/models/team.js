import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Team = sequelize.define('team', {
    name: { type: DataTypes.STRING,  allowNull: false  }
})

export default Team
