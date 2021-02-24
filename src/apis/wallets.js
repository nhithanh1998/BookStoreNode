import { Router } from 'express'

import * as walletHandling from "./handling/wallets"

export const walletsRouter = new Router()

walletsRouter.get("/", walletHandling.getWallet)
