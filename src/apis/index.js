import { Router } from 'express'

import { genresRouter } from "./genres"
import { authorsRouter } from "./authors"
import { publishersRouter } from "./publishers"
import { booksRouter } from "./books"
import { usersRouter } from "./users"
import { walletsRouter } from "./wallets"

export const apiRouter = new Router()

apiRouter.use("/genres", genresRouter)
apiRouter.use("/authors", authorsRouter)
apiRouter.use("/publishers", publishersRouter)
apiRouter.use("/books", booksRouter)
apiRouter.use("/users", usersRouter)
apiRouter.use("/wallets", walletsRouter)