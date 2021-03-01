import _ from "lodash"

export function standardizeResponseJSON(type, object) {
   if (_.isArray(object)) {
      return object.map(o => standardizeResponseJSON(type, o))
   }
   return {
      type,
      id: object.id,
      attributes: {
         ..._.omit(object, ["id"])
      }
   }
}