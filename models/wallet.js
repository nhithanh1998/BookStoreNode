import {
    Sequelize,
    Model,
    DataTypes
} from "sequelize"

export class Wallet extends Model {}

Wallet.init({
    id: {
        type: DataTypes.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true
    }
}, {
    tableName: "wallet"
})