import {Sequelize, Model} from "sequelize"

export class Book extends Model {}

Book.init({
  id: {
    type: Sequelize.UUID,
    default: Sequelize.UUIDV4,
    primaryKey: true,
    field: "id"
  },
  name: {
      type: Sequelize.String,
      unique: true,
      allowNull: false,
      field: "name"
  }
}, {
  tableName: "book",
  timestamps: true,
  paranoid: true
})