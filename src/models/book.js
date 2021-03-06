import { Sequelize, DataTypes, Model } from "sequelize"

import { Author, Publisher, Genre, BookGenre } from "."

export class Book extends Model {}

export function initBookModel(sequelize) {
   Book.init({
      id: {
         type: DataTypes.UUID,
         defaultValue: Sequelize.UUIDV4,
         primaryKey: true,
         field: "id"
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
         field: "name"
      },
      authorId: {
         type: DataTypes.UUID,
         references: {
            model: Author,
            key: "id"
         },
         field: "author_id"
      },
      publisherId: {
         type: DataTypes.UUID,
         references: {
            model: Publisher,
            key: "id"
         },
         field: "publisher_id"
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
         type: DataTypes.TEXT,
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
   Book.belongsToMany(Genre, { through: BookGenre, foreignKey: "book_id", sourceKey: "id"  })
}