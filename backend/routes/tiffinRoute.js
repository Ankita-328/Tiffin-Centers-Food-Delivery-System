import express from 'express'
import multer from 'multer';
import { addTiffin,listTiffin,removeTiffin } from '../controllers/tiffinController.js'

const tiffinRouter = express.Router()

const upload = multer()

tiffinRouter.post('/add-tiffin',upload.none(),addTiffin) 
tiffinRouter.get('/list-tiffin',listTiffin)
tiffinRouter.post('/remove-tiffin',removeTiffin)


export default tiffinRouter