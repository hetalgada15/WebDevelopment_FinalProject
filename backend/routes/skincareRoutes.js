import express from 'express'
const  router = express.Router()
import { getSkincares,getSkincarebyID,createSkincare, deleteSkincare,updateSkincare } from '../controllers/skincareController.js'


router.get('/', getSkincares)
router.get('/:id', getSkincarebyID)
router.post('/addskincare', createSkincare)
router.delete('/:id', deleteSkincare)
router.put('/:id',updateSkincare)


export default router 