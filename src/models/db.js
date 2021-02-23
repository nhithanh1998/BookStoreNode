import { Sequelize } from "sequelize"

import { initAuthorModel } from "./author"
import { initBookModel } from "./book"
import { initGenreModel } from "./genre"
import { initPublisherModel } from "./publisher"
import { initUserModel } from "./user"
import { initWalletModel } from "./wallet"

export function initSequelize() {
   console.log("start init")

   var sequelize = new Sequelize('bookstore', 'postgres', 'nhatthanh123', {
      host: 'localhost',
      dialect: 'postgres'
   })
   initAuthorModel(sequelize)
   initBookModel(sequelize)
   initGenreModel(sequelize)
   initPublisherModel(sequelize)
   initUserModel(sequelize)
   initWalletModel(sequelize)
   sequelize.sync({ force: true });
   console.log("sync complete")
}