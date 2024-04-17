import express from 'express'
const  router = express.Router()
import { insertStudio, getAllStudDetails, getStudDetailsById, updateStudDetails, deleteStudDetails } from '../controllers/studioController.js'

router.post('/addStudio', insertStudio)
router.get('/', getAllStudDetails)
router.get('/:id', getStudDetailsById)
router.put('/:id', updateStudDetails)
router.delete('/:id', deleteStudDetails)

export default router