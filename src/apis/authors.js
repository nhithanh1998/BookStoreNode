import { Router } from 'express'

import * as authorsHandling  from "./handling/authors"
import * as middlewares from "./middlewares"

export const authorsRouter = new Router()

authorsRouter.get("/", middlewares.modifyQueryParamsForGetMultipleInstances, authorsHandling.getAuthors)

authorsRouter.get("/:id", authorsHandling.getAuthor)

const expectedCreateInput = `{
    data:{
        type: String,
        attributes: {
            name: String,
            nationality: String,
            gender: Maybe Boolean,
            biography: Maybe String
        }
    }
 }`

const createInputFormat = {
   data: {
      type: "author",
      attributes: {
         name: {
            type: "String",
            required: true
         },
         nationality: {
            type: "String",
            required: true
         },
         gender: {
            type: "Boolean",
            required: false,
            defaultValue: true
         }, 
         biography: {
            type: "String",
            required: false,
            defaultValue: "No biography describe!"
         }
      }
   }
}

authorsRouter.post("/", middlewares.validateInputValueBeforeCreate(expectedCreateInput, createInputFormat),authorsHandling.createAuthor)