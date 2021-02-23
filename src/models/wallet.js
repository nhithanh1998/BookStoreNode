import {
    Sequelize,
    Model
} from "sequelize"

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
}
