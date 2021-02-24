import { Router } from 'express'

import * as booksHandling from "./handling/books"
import * as middlewares from "./middlewares"

export const booksRouter = new Router()

booksRouter.get("/", middlewares.modifyQueryParamsForGetMultipleInstances, booksHandling.getBooks)

booksRouter.get("/:id", booksHandling.getBook)

booksRouter.post("/", booksHandling.createBook)