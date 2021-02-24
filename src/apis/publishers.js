import { Router } from 'express'

import * as publisherHandling from "./handling/publishers"
import * as middlewares from "./middlewares"

export const publishersRouter = new Router()

publishersRouter.get("/", middlewares.modifyQueryParamsForGetMultipleInstances, publisherHandling.getPublishers)

publishersRouter.get("/:id", publisherHandling.getPublisher)

publishersRouter.post("/", publisherHandling.createPublisher)