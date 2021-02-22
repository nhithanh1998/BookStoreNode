import {
    Sequelize,
    Model
} from "sequelize"

class Genre extends Model {}

Genre.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    }
}, {
    tableName: "genre",
    timestamps: true,
    paranoid: true
})