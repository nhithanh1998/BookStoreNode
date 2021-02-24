import { Router } from 'express'

import * as publisherHandling from "./handling/publishers"

export const publishersRouter = new Router()

publishersRouter.get("/", publisherHandling.getPublishers)

publishersRouter.get("/:id", publisherHandling.getPublisher)

publishersRouter.post("/", publisherHandling.createPublisher)