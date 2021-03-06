import { Sequelize } from "sequelize"

import { initAuthorModel, establishAuthorAssociations, Author } from "./author"
import { initBookModel, establishBookAssociations, Book } from "./book"
import { initGenreModel, establishGenreAssociations } from "./genre"
import { initPublisherModel, establishPublisherAssociations } from "./publisher"
import { initUserModel, establishUserAssociations } from "./user"
import { initWalletModel, establishWalletAssociations } from "./wallet"
import { initBookGenreModel } from "./book_genre"

export function initSequelize() {
   console.log("start init")

   var sequelize = new Sequelize('bookstore', 'postgres', 'nhatthanh123', {
      host: 'localhost',
      dialect: 'postgres'
   })

   // init tables
   initAuthorModel(sequelize)
   initGenreModel(sequelize)
   initPublisherModel(sequelize)
   initBookModel(sequelize)
   initBookGenreModel(sequelize)
   initUserModel(sequelize)
   initWalletModel(sequelize)


   // define table associations
   establishAuthorAssociations()
   establishBookAssociations()
   establishGenreAssociations()
   establishPublisherAssociations()
   establishUserAssociations()
   establishWalletAssociations()

   // sync all models
   // Book.sync({ force: true })
   // Author.sync({force: true})
   // sequelize.sync({ force: true });
   // console.log("sync complete")
}