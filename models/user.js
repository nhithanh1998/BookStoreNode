import {
    Sequelize,
    Model,
    DataTypes
} from "sequelize"

export class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true
    }
}, {
    tableName: "user"
})