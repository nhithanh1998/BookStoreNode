import { Router } from 'express'
import { getGenres } from "./hanles/genres"

export const genresRouter = new Router()

genresRouter.get('/', getGenres)

genresRouter.get('/:id', (req, res) => {
   res.send({ id: req.params.id })
})