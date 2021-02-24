import { Router } from 'express'

import * as usersHandling from "./handling/users"

export const usersRouter = new Router()

usersRouter.get("/", usersHandling.getUsers)

usersRouter.get("/:id", usersHandling.getUser)

usersRouter.post("/", usersHandling.createUser)