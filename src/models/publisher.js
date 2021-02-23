import { Sequelize, Model } from "sequelize"

import { Book } from "."

export class Publisher extends Model {}

export function initPublisherModel(sequelize) {
   Publisher.init({
      id: {
         type: Sequelize.UUID,
         default: Sequelize.UUIDV4,
         primaryKey: true
      },
      name: {
         type: Sequelize.STRING,
         unique: true,
         allowNull: false
      }
   }, {
      sequelize,
      tableName: "publisher",
      timestamps: true,
      paranoid: true
   })
   // Association
   Publisher.hasMany(Book, {
      foreignKey: "publisher_id"
   })
}