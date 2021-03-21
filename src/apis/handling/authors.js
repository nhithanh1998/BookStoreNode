import _ from "lodash"

import { Author } from "../../models"
import { standardizeResponseJSON } from "../../utils"

export async function getAuthors(req, res) {
   const authors = await Author.findAll(req.query)
   return res.status(200).send({
      data: standardizeResponseJSON("author", authors)
   })
}

export async function getAuthor(req, res) {
   const id = req.params.id
   const author = await Author.findOne({
      where: {
         id,
         ...req.query
      }
   })
   return res.status(200).send({
      data: standardizeResponseJSON("author", author)
   })
}

export async function createAuthor(req, res) {
   const author = _.get(req.body, "data.attributes")
   let newAuthor = await Author.create(author, { isNewRecord: true })
   res.status(201).send({
      data: standardizeResponseJSON("author", newAuthor.toJSON())
   })
}

export function updateAuthor(req, res) {

}

export function deleteAuthor(req, res) {

}