import express  from 'express'

import UploadConfig from './config/upload.js'
import multer from 'multer'

import staticController from './controllers/staticController.js'

const routes = express.Router()
const upload = multer(UploadConfig)

routes.get('/index', staticController.index)

routes.post('/upload', upload.array('images'), staticController.upload)

export default routes