import {Sequelize, Model} from "sequelize"

import {Author} from "."

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
      type: Sequelize.STRING,
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
  Book.belongsTo(Author, {
    foreignKey: "author_id",
    targetKey: "id"
  })
}
