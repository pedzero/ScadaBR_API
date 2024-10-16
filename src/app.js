import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import dataRouter from './routes/dataRouter.js'
import aqiRouter from './routes/airQualityRouter.js'
import parametersRouter from './routes/parametersRouter.js'
import roomsRouter from './routes/roomsRouter.js'
import institutesRouter from './routes/institutesRouter.js'
import citiesRouter from './routes/citiesRouter.js'

import database from './config/database.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3333

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', dataRouter)
app.use('/api', aqiRouter)
app.use('/api', parametersRouter)
app.use('/api', roomsRouter)
app.use('/api', institutesRouter)
app.use('/api', citiesRouter)

const init = async () => {
    try {
        await database.sync()
        app.listen(port, () =>{
            console.log(`Server running on port ${port}.`)
        })
    } catch (error) {
        console.log(error)
    }
}

init()