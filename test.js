const { typeCheck } = require('type-check')
const { validate } = require('uuid')

const sample = {
   data: {
      type: "book",
      attributes: {
         name: "Đôi gió hú",
         authorId: "839a07f6-1609-4309-a2c6-4f0f53a2b448",
         bookTotalPage: 155,
         bookSize: "book size",
         bookCoverType: "book over type"
      }
   }
}

const expectedCreateInput = `{
    data:{
        type: String,
        attributes: {
            name: String,
            author: {
               type: String,
               id: UUID
            },
            bookTotalPage: Number,
            bookSize: String,
            bookCoverType: String,
     }
    }
 }`

console.log(typeCheck(expectedCreateInput, sample, {
   customTypes: {
      UUID: {
         typeOf: "String",
         validate
      }
   }
}))