import express from 'express'

import * as resources from './resources'
import * as models from "./models"

function initApp() {
    models.initSequelize()
}

initApp()