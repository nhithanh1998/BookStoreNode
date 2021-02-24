import { Author } from "../../models"

export async function getAuthors(req, res) {
    const authors = Author.findAll({
        where: {}
    })
}

export function getAuthor(req, res) {

}

export function createAuthor(req, res) {

}

export function updateAuthor(req, res) {

}

export function deleteAuthor(req, res) {

}