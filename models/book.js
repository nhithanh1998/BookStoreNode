import {
    Sequelize,
    Model,
    DataTypes
} from "sequelize"

export class Book extends Model {}

Book.init({
    id: {
        type: DataTypes.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true
    }
}, {
    tableName: "book"
})