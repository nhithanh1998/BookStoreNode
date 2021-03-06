import { Router } from 'express'

import * as publisherHandling from "./handling/publishers"
import * as middlewares from "./middlewares"

export const publishersRouter = new Router()

publishersRouter.get("/", middlewares.modifyQueryParamsForGetMultipleInstances, publisherHandling.getPublishers)

publishersRouter.get("/:id", publisherHandling.getPublisher)

const expectedCreateInput = `{
    data:{
        type: String,
        attributes: {
            name: String
        }
    }
 }`

const createInputFormat = {
   data: {
      type: "publisher",
      attributes: {
         name: {
            type: "String",
            required: true
         }
      }
   }
}

publishersRouter.post("/", middlewares.validateInputValueBeforeCreate(expectedCreateInput, createInputFormat),publisherHandling.createPublisher)