import express from "express"

import {apiRouter} from "./apis"
import * as models from "./models"

async function startApp() {
   models.initSequelize()
   const app = express()
   app.use("/api", apiRouter) 
   app.listen(3001, () => console.log("app start at port 3001"))
}

startApp()