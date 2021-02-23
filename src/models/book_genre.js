import { Sequelize, Model } from "sequelize"

import { Book, Genre } from "."

export class BookGenre extends Model {}

export function initBookGenreModel(sequelize) {
   BookGenre.init({
      id: {
         type: Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4,
         primaryKey: true
      },
      bookId: {
         type: Sequelize.UUID,
         references: {
            model: Book,
            key: "id"
         }
      },
      genreId: {
         type: Sequelize.UUID,
         references: {
            model: Genre,
            key: "id"
         }
      }
   }, {
      sequelize,
      tableName: "book_genre",
      timestamps: true
   })
}