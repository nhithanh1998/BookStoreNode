import {Sequelize, Model} from "sequelize"

export class User extends Model {}

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
