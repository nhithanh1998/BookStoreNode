import _ from "lodash"

import { Book, Author, Publisher, Genre, BookGenre } from "../../models"
import { standardizeResponseJSON, getNotExistIds } from "../../utils"

export async function getBooks(req, res) {
   const books = await Book.findAll(req.query)
   return res.status(200).send({
      data: standardizeResponseJSON("book", books)
   })
}

export function getBook(req, res) {

}

export async function createBook(req, res) {
   let err = []
   const bookAttribute = _.get(req.body, "data.attributes")

   // verify book reference ids exist in database

   const { authorId, publisherId, genreIds } = bookAttribute

   let rs = await Promise.all([
      getNotExistIds(Author, [authorId]),
      getNotExistIds(Publisher, [publisherId]),
      getNotExistIds(Genre, [...genreIds])
   ])
   const notExistAuthorIds = rs[0]
   const notExistPublisherIds = rs[1]
   const notExistGenreIds = rs[2]

   if (notExistAuthorIds.length > 0) {
      err = [{
         msg: "Below authorId is not exist!",
         id: notExistAuthorIds[0]
      }]
   }
   if (notExistPublisherIds.length > 0) {
      err = [...err, {
         msg: "Below publisherId is not exist!",
         id: notExistPublisherIds[0]
      }]
   }
   if (notExistGenreIds.length > 0) {
      err = [...err, {
         msg: "below genreId is not exist!",
         ids: notExistGenreIds
      }]
   }

   // if err length > 0 don't create book

   if (err.length > 0) {
      res.status(409).send({
         err
      })
   } else {
      let newBook = await Book.create(_.omit(bookAttribute, ["genreIds"]), { isNewRecord: true })
      await newBook.addGenres(genreIds)
      return res.status(201).send(standardizeResponseJSON("book", newBook.toJSON()))
   }

}

export function updateBook(req, res) {

}

export function deleteBook(req, res) {

}