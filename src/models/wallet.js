import { Sequelize, Model } from "sequelize"

import { User } from "."

export class Wallet extends Model {}

export function initWalletModel(sequelize) {
   Wallet.init({
      id: {
         type: Sequelize.UUID,
         default: Sequelize.UUIDV4,
         primaryKey: true
      }
   }, {
      sequelize,
      tableName: "wallet",
      timestamps: true,
      paranoid: true
   })
   // Association
   Wallet.belongsTo(User, {
      foreignKey: "user_id"
   })
}