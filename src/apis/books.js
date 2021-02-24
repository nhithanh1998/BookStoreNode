import { Router } from 'express'

import * as booksHandling from "./handling/books"

export const booksRouter = new Router()

booksRouter.get("/", booksHandling.getBooks)

booksRouter.get("/:id", booksHandling.getBook)

booksRouter.post("/", booksHandling.createBook)