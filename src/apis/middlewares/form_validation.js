import { typeCheck } from "type-check"
import _ from "lodash"

export function validateInputValueBeforeCreateGenre(req, res, next) {
   const expected = `{
        data:{
            type: String,
            attributes: {
                name: String
            }
        }
    }`
   if (typeCheck(expected, req.body)) {
      req.genre = {
         name: "data.attributes.name"
      }
      next()
   } else {
      res.send({
         msg: "Invalid form"
      })
   }

}