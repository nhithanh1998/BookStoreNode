import { Sequelize, Model } from "sequelize"

import { Book, BookGenre } from "."

export class Genre extends Model {
   toJSON() {

   }
}

export function initGenreModel(sequelize) {
   Genre.init({
      id: {
         type: Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4,
         primaryKey: true
      },
      name: {
         type: Sequelize.TEXT,
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