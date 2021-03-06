import _ from "lodash"

import { Genre } from "../../models"
import { standardizeResponseJSON } from "../../utils"

export async function getGenres(req, res) {
   const genres = await Genre.findAll(req.query)
   return res.status(200).send({
      data: standardizeResponseJSON("genre", genres)
   })
}

export async function getGenre(req, res) {
   const id = req.params.id
   const genre = Genre.findOne({
      where: {
         id,
         ...req.query
      }
   })
   return res.status(200).send({
      data: standardizeResponseJSON("genre", genre)
   })
}

export async function createGenre(req, res) {
   let newGenre = await Genre.create(_.get(req.body, "data.attributes"), { raw: true, isNewRecord: true })
   res.status(201).send({
      data: standardizeResponseJSON("genre", newGenre.toJSON())
   })
}

export function updateGenre(req, res) {

}

export function deleteGenre(req, res) {

}