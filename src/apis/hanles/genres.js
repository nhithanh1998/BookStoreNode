import {Genre} from "../../models"

export async function getGenres(_, res) {
    const genres = await Genre.findAll()
    return res.send(genres)
}