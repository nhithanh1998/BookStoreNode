import { Sequelize, DataTypes, Model } from "sequelize"

import { Book, BookGenre } from "."

export class Genre extends Model {}

export function initGenreModel(sequelize) {
   Genre.init({
      id: {
         type: DataTypes.UUID,
         defaultValue: Sequelize.UUIDV4,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      }
   }, {
      sequelize,
      tableName: "genre",
      timestamps: true,
      paranoid: true
   })
}

export function establishGenreAssociations() {
   Genre.belongsToMany(Book, { through: BookGenre })
}