import { Sequelize, DataTypes, Model } from "sequelize"

import { Book } from "."

export class Publisher extends Model {}

export function initPublisherModel(sequelize) {
   Publisher.init({
      id: {
         type: DataTypes.UUID,
         defaultValue: Sequelize.UUIDV4,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false
      }
   }, {
      sequelize,
      tableName: "publisher",
      timestamps: true,
      paranoid: true
   })
}

export function establishPublisherAssociations() {
   Publisher.hasMany(Book, {
      foreignKey: "publisher_id"
   })
}