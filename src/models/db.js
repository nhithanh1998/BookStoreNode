import {Sequelize} from "sequelize"

import * as models from "."

export function initSequelize() {
    console.log("start init")

    var sequelize = new Sequelize('bookstore', 'postgres', 'nhatthanh123', {
        host: 'localhost',
        dialect: 'postgres'
    })
    models.initAuthorModel(sequelize)
    models.initBookModel(sequelize)
    models.initGenreModel(sequelize)
    models.initPublisherModel(sequelize)
    models.initUserModel(sequelize)
    models.initWalletModel(sequelize)
    sequelize.sync({ force: true });
    console.log("sync complete")
}