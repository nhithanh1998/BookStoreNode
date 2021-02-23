import {
    Router
} from 'express'

export let genresRouter = new Router()

genresRouter.get('/', (req, res) => {
    res.send({
        "msg": "ping"
    }, 200)
})