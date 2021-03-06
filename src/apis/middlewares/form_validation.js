import { typeCheck } from "type-check"
import _ from "lodash"
import { validate } from "uuid"

export function validateInputValueBeforeCreate(expectedInput, createInputFormat) {
   return validateInputValueBeforeCreate[expectedInput] || (validateInputValueBeforeCreate[expectedInput] = function(req, res, next) {
      if (typeCheck(expectedInput, req.body, {
            customTypes: {
               UUID: {
                  typeOf: "String",
                  validate
               }
            }
         })) {
         next()
      } else {
         res.send({
            msg: "Invalid json create json format",
            createInputFormat
         })
      }
   })
}