import _ from "lodash"

import { Genre } from "../../models"
import { standardizeResponseJSON } from "../../utils"

export async function getGenres(_, res) {
   const genres = await Genre.findAll(req.query)
   return res.send({
      data: standardizeResponseJSON("genre", genres)
   }, 200)
}

export async function getGenre(req, res) {
   const id = req.params.id
   const genre = Genre.findOne({
      where: {
         id,
         ...req.query
      }
   })
   return res.send({
      data: standardizeResponseJSON("genre", genre)
   }, 200)
}

export async function createGenre(req, res) {
   const genreName = _.get(req.body, "data.attributes.name")
   await Genre.create({ name: genreName })
   res.send({
      msg: "create Success"
   }, 201)
}

export function updateGenre(req, res) {

}

export function deleteGenre(req, res) {

}