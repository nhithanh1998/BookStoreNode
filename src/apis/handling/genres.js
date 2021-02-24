import { Genre } from "../../models"

export async function getGenres(_, res) {
   const genres = await Genre.findAll()
   return res.send(genres)
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
      data: genre
   }, 200)
}

export async function createGenre(req, res) {
   const genre = req.body.data.genre
   await Genre.create({ name: genre.name })
   res.send({
      msg: "create Success"
   }, 201)
}

export function updateGenre(req, res) {

}

export function deleteGenre(req, res) {
   
}