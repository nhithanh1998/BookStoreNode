import { Sequelize, DataTypes, Model } from "sequelize"

import { Author, Publisher, Genre, BookGenre } from "."

export class Book extends Model {}

export function initBookModel(sequelize) {
   Book.init({
      id: {
         type: DataTypes.UUID,
         default: Sequelize.UUIDV4,
         primaryKey: true,
         field: "id"
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
         field: "name"
      },
      bookSize: {
         type: DataTypes.STRING,
         allowNull: false,
         field: "book_size"
      },
      SKU: {
         type: DataTypes.INTEGER,
         allowNull: false,
         field: "SKU"
      },
      bookCoverType: {
         type: DataTypes.STRING,
         allowNull: false,
         field: "book_cover_type"
      },
      bookTotalPage: {
         type: DataTypes.INTEGER,
         allowNull: false,
         field: "book_total_page"
      },
      description: {
         type: DataTypes.STRING,
         defaultValue: "No description!",
         field: "description"
      }
   }, {
      sequelize,
      tableName: "book",
      timestamps: true,
      paranoid: true
   })
}

export function establishBookAssociations() {
   Book.Author = Book.belongsTo(Author, {
      foreignKey: "author_id",
      targetKey: "id",
      as: "author"
   })
   Book.Publisher = Book.belongsTo(Publisher, {
      foreignKey: "publisher_id",
      targetKey: "id",
      as: "publisher"
   })
   Book.belongsToMany(Genre, { through: BookGenre })
}