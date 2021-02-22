import {Sequelize, Model} from "sequelize"

export class User extends Model {}

User.init({
  id: {
    type: Sequelize.UUID,
    default: Sequelize.UUIDV4,
    primaryKey: true,
    field: "id"
  },
  firstName: {
    type: Sequelize.String,
    field: "first_name"
  },
  lastName: {
    type: Sequelize.String,
    field: "last_name"
  },
  username: {
    type: Sequelize.String,
    unique: true,
    allowNull: false,
    field: "username"
  },
  password: {
    type: Sequelize.String,
    allowNull: false,
    field: "password"
  },
  avatarURL: {
    type: String,
    defaultValue: "",
    field: "avatar_url"
  }
}, {
  tableName: "user",
  timestamps: true,
  paranoid: true
})