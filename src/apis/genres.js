import { Router } from 'express'

import * as genresHandling from "./handling/genres"
import * as middlewares from "./middlewares"

export const genresRouter = new Router()

genresRouter.get("/", middlewares.modifyQueryParamsForGetMultipleInstances, genresHandling.getGenres)

genresRouter.get("/:id", genresHandling.getGenre)

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
      type: "genre",
      attributes: {
         name: {
            type: "String",
            required: true
         }
      }
   }
}

genresRouter.post("/", middlewares.validateInputValueBeforeCreate(expectedCreateInput, createInputFormat), genresHandling.createGenre)