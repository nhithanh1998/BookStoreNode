import { typeCheck } from "type-check"
import _ from "lodash"

export function validateInputValueBeforeCreate(expectedInput, createInputFormat) {
   return validateInputValueBeforeCreate[expectedInput] || (validateInputValueBeforeCreate[expectedInput] = function(req, res, next) {
      if (typeCheck(expected, req.body)) {
         next()
      } else {
         res.send({
            msg: "Invalid genre create json format",
            createInputFormat
         })
      }
   })
}