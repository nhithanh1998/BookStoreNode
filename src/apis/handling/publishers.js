import _ from "lodash"

import { Publisher } from "../../models"
import { standardizeResponseJSON } from "../../utils"

export async function getPublishers(req, res) {
   const publishers = await Publisher.findAll(req.query)
   return res.status(200).send({
      data: standardizeResponseJSON("publisher", publishers)
   })
}

export async function getPublisher(req, res) {
   const id = req.params.id
   const publisher = await Publisher.findOne({
      where: {
         id,
         ...req.query
      }
   })
   return res.status(200).send({
      data: standardizeResponseJSON("publisher", publisher)
   })
}

export async function createPublisher(req, res) {
   let newPublisher = await Publisher.create(_.get(req.body, "data.attributes"), { isNewRecord: true })
   res.status(201).send({
      data: standardizeResponseJSON("publisher", newPublisher.toJSON())
   })
}

export function updatePublisher(req, res) {

}

export function deletePublisher(req, res) {

}