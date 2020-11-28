import express from 'express'
import path from 'path'
import 'express-async-errors'
import errorHandler from './src/errors/handler.js'
import routes from './src/routes.js'

import cors from 'cors'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express() 

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads' , express.static(path.join(__dirname, '.',  'uploads' )))
app.use(errorHandler)

app.listen(process.env.PORT)