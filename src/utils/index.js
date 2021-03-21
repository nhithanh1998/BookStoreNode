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

export async function getNotExistIds(model, ids) {
   const existIds = await model.findAll({
      where: {
         id: ids
      },
      attributes: ["id"],
      raw: true
   }).then(rs => rs.map(object => object.id))
   return _.difference(ids, existIds)
}