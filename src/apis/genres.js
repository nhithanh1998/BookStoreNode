import { Router } from 'express'

import * as genresHandling from "./handling/genres"

export const genresRouter = new Router()

genresRouter.get("/", genresHandling.getGenres)

genresRouter.get("/:id", genresHandling.getGenre)

genresRouter.post("/", genresHandling.createGenre)