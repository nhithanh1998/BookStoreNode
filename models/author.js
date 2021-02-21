import {
    Sequelize,
    Model,
    DataTypes
} from "sequelize"

class Author extends Model {}

Author.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        fields: "id"
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "name"
    },
    createdAt: {

    },
    updatedAt: {

    }
}, {
    tableName: "author"
})