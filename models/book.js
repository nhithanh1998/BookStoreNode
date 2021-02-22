import {
  Sequelize,
  Model
} from "sequelize"

export class Book extends Model {}

export function initBookModel(sequelize) {

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
    sequelize,
    tableName: "book",
    timestamps: true,
    paranoid: true
  })
}