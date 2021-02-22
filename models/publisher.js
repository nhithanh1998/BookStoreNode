import {Sequelize, Model} from "sequelize"

export class Publisher extends Model {}

Publisher.init({
  id: {
    type: Sequelize.UUID,
    default: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.String,
    unique: true,
    allowNull: false
  }
}, {
  tableName: "publisher",
  timestamps: true,
  paranoid: true
})