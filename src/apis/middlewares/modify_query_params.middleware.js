import _ from "lodash"

export function modifyQueryParamsForGetMultipleInstances(req, res, next) {
   const query = _.defaults(req.query, { limit: 10, offset: 0 })

   req.query = {
      ..._.pick(query, ["limit", "offset"]),
      where: {
         ..._.omit(query, ["limit", "offset"])
      }
   }

   next()
}