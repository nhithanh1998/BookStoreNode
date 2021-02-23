import { Router } from 'express'

import {genresRouter} from "./genres"

export const apiRouter = new Router()

apiRouter.use("/genres", genresRouter)