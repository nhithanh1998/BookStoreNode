import {
    Sequelize,
    Model
} from "sequelize"

class Author extends Model {}

Author.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        fields: "id"
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: "name"
    },
    nationality: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "nationality"
    },
    gender: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        field: "gender"
    },
    biography: {
        type: Sequelize.STRING,
        defaultValue: "No biography describe!",
        field: "biography"
    }
}, {
    tableName: "author",
    timestamps: true,
    paranoid: true
})