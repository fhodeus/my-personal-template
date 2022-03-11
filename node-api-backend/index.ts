import express from 'express'
import path from 'path'
import 'express-async-errors'
import errorHandler from './src/middleware/errors/handler'
import routes from './src/routes'

import './src/database/connection'

require('dotenv/config');

import cors from 'cors'

const app = express() 

app.use(cors())
app.use(express.json())
app.use(routes)

//rota de visualizacao de imagens
app.use('/uploads' , express.static(path.join(__dirname, 'uploads' )))

app.use(errorHandler)


app.listen(process.env.PORT)