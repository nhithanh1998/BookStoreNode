import {
    Sequelize,
    Model,
    DataTypes
} from 'sequelize'

class Genre extends Model {}

Genre.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
}, {
    tableName: "Genre"
})