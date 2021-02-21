import {
    Sequelize,
    Model,
    DataTypes
} from "sequelize"

export class Publisher extends Model {}

Publisher.init({
    id: {
        type: DataTypes.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true
    }
}, {
    tableName: "publisher"
})