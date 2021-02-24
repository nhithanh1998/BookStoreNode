import { Router } from 'express'

import * as authorsHandling  from "./handling/authors"

export const authorsRouter = new Router()

authorsRouter.get("/", authorsHandling.getAuthors)

authorsRouter.get("/:id", authorsHandling.getAuthor)

authorsRouter.post("/", authorsHandling.createAuthor)