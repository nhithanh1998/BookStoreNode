import express from "express"

import { apiRouter } from "./apis"
import bodyParser from "body-parser"

import * as models from "./models"

async function startApp() {
   models.initSequelize()
   const app = express()
   app.use(bodyParser.urlencoded({ extended: true }))
   app.use(bodyParser.json())
   app.use(bodyParser.json())
   app.use("/", apiRouter)
   app.listen(3001, () => console.log("app start at port 3001"))
}

startApp()