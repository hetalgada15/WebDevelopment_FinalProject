import express from 'express'
const  router = express.Router()
import { getPackagees, getPackageById, createPackage, deleteRest, updatePackage } from '../controllers/packageController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.get('/', getPackagees)
router.get('/:id', getPackageById)
router.post('/create', createPackage )
router.delete('/:id', deleteRest )
router.put('/:id', updatePackage)


export default router