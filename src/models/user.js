import { Sequelize, Model } from "sequelize"
import { SHA256 } from "crypto-js"
import jwt from "jsonwebtoken"
import _ from "lodash"

import { Wallet } from "."

export class User extends Model {
   static hashPassword(password) {
      return SHA256(password)
   }

   verifyPassword(password) {
      return User.hashPassword(password) == this.password
   }

   generateToken() {
      return jwt.sign({
         userId: this.id
      }, "secret")
   }

   toJSON() {
      return _.omit(this.value, ["password"])
   }
}

function hashPasswordBeforeSave(user, options) {
   if(user.changed("password")) {
      console.log("Password update and hashing")
      user.password = User.hashPassword(user.password)
   }
}

User.addHook("beforeSave", hashPasswordBeforeSave)

export function initUserModel(sequelize) {
   User.init({
      id: {
         type: Sequelize.UUID,
         default: Sequelize.UUIDV4,
         primaryKey: true,
         field: "id"
      },
      firstName: {
         type: Sequelize.STRING,
         field: "first_name"
      },
      lastName: {
         type: Sequelize.STRING,
         field: "last_name"
      },
      username: {
         type: Sequelize.STRING,
         unique: true,
         allowNull: false,
         field: "username"
      },
      password: {
         type: Sequelize.STRING,
         allowNull: false,
         field: "password"
      },
      avatarURL: {
         type: Sequelize.STRING,
         defaultValue: "",
         field: "avatar_url"
      }
   }, {
      sequelize,
      tableName: "user",
      timestamps: true,
      paranoid: true
   })
}

export function establishUserAssociations() {
   User.hasOne(Wallet)
}