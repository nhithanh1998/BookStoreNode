import { Router } from 'express'

import * as booksHandling from "./handling/books"
import * as middlewares from "./middlewares"

export const booksRouter = new Router()

booksRouter.get("/", middlewares.modifyQueryParamsForGetMultipleInstances, booksHandling.getBooks)

booksRouter.get("/:id", booksHandling.getBook)

const expectedCreateInput = `{
    data:{
        type: String,
        attributes: {
            name: String,
            authorId: UUID,
            publisherId: UUID,
            bookSize: String,
            SKU: Number,
            bookCoverType: String,
            bookTotalPage: Number,
            description: Maybe String
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
         },
         authorId: {
            type: "UUID",
            required: true
         },
         publisherId: {
            type: "UUID",
            required: true
         },
         bookSize: {
            type: "String",
            required: true
         },
         SKU: {
            type: "Integer",
            required: true
         },
         bookCoverType: {
            type: "String",
            required: true
         },
         bookTotalPage: {
            type: "Integer",
            required: true
         },
         description: {
            type: "String",
            required: false
         }
      }
   }
}

booksRouter.post("/", middlewares.validateInputValueBeforeCreate(expectedCreateInput, createInputFormat), booksHandling.createBook)