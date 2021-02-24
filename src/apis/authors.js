import { Router } from 'express'

import * as authorsHandling  from "./handling/authors"
import * as middlewares from "./middlewares"

export const authorsRouter = new Router()

authorsRouter.get("/", middlewares.modifyQueryParamsForGetMultipleInstances, authorsHandling.getAuthors)

authorsRouter.get("/:id", authorsHandling.getAuthor)

authorsRouter.post("/", authorsHandling.createAuthor)