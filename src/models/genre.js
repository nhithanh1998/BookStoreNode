import { Sequelize, Model } from "sequelize"
import { Book, BookGenre } from "."

class Genre extends Model {}

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
   // Association
   Genre.belongsToMany(Book, { through: BookGenre })
}