export function modifyQueryParamsForGetMultipleInstances(req, _, next) {
   query = _.defaults(req.query, { limit: 10, offset: 0 })

   req.query = {
      ..._.pick(query, ["limit", "offset"]),
      where: {
         ..._.omit(query, ["limit", "offset"])
      }
   }

   next()
}