import express from 'express'
import bodyParser from 'body-parser'

import testRouter from './routes/testRoutes.js'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(testRouter)

const init = async () => {
    try {
        app.listen(port, () =>{
            console.log(`Server running on port ${port}.`)
        })
    } catch (error) {

    }
}

init()