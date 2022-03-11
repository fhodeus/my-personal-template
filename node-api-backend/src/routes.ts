import express  from 'express'

import UploadConfig from './config/upload'
import multer from 'multer'

import staticController from './controllers/staticController'
import FolderController from './controllers/FolderController'
import UserController from './controllers/UserController'


const routes = express.Router()
const upload = multer(UploadConfig)

//StaticController
routes.get('/index', staticController.index)
routes.post('/upload', upload.array('images'), staticController.upload)

//FolderController
routes.get('/folder/get', FolderController.GetFolder)
routes.get('/folder/list', FolderController.ListFolder)
routes.get('/folder/delete', FolderController.DeleteFolder)
routes.post('/folder/create',upload.array('images'), FolderController.CreateFolder)

//UserController
routes.post('/user/create', UserController.CreateUser)
routes.get('/user/list', UserController.ListUsers)
routes.get('/user/login', UserController.Login)



export default routes