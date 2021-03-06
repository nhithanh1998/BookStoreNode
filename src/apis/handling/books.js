import _ from "lodash"

import { Book, Author, Publisher } from "../../models"
import { standardizeResponseJSON } from "../../utils"

export async function getBooks(req, res) {
    const books = await Book.findAll(req.query)
    return res.status(200).send({
       data: standardizeResponseJSON("book", books)
    })
}

export function getBook(req, res) {

}

export async function createBook(req, res) {
   //    Promise.all([
   //       Author.count({ where: { id: _.get("data.attributes.authorId") } }),
   //       Publisher.count({ where: { id: _.get("data.attributes.publishedId") } })
   //    ])
   let newBook = await Book.create(_.get(req.body, "data.attributes"), { raw: true, isNewRecord: true })
   return res.status(201).send(standardizeResponseJSON("book", newBook))
}

export function updateBook(req, res) {

}

export function deleteBook(req, res) {

}