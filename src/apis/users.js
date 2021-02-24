import { Router } from 'express'

import * as usersHandling from "./handling/users"
import * as middlewares from "./middlewares"

export const usersRouter = new Router()

usersRouter.get("/", middlewares.modifyQueryParamsForGetMultipleInstances, usersHandling.getUsers)

usersRouter.get("/:id", usersHandling.getUser)

usersRouter.post("/", usersHandling.createUser)