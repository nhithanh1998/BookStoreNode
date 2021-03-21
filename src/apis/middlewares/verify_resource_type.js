import _ from "lodash"

// Verify resource type before create. Prevent mistake create: create Author but request Publisher

export function verifyResourceType(expectedType) {
   return verifyResourceType[expectedType] || (verifyResourceType[expectedType] = function(req, res, next) {
      const requestType = _.get(req.body, "data.type")
      if (requestType !== expectedType) {
         res.status(409).send({
            "msg": `Request type mismatch: Expect ${expectedType} but receive ${requestType}`
         })
      }
      next()
   })
}