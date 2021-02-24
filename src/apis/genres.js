import { Router } from 'express'

import * as genresHandling from "./handling/genres"
import * as middlewares from "./middlewares"

export const genresRouter = new Router()

genresRouter.get("/", middlewares.modifyQueryParamsForGetMultipleInstances, genresHandling.getGenres)

genresRouter.get("/:id", genresHandling.getGenre)

genresRouter.post("/", genresHandling.createGenre)