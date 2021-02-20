import express from 'express'

import * as resources from './resources'

const app = express()

app.use('/genres', resources.genresRouter)

app.listen(3001, () => console.log("Server is running at port 3001"))