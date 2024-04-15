import asyncHandler from 'express-async-handler'
import Studio from '../models/studioModel.js'

const insertStudio = asyncHandler(async (req, res) => {

    const { studHallName, studSeats, studDes, studimg1, studimg2, studimg3 } = req.body

    const newstudio = new Studio({
      studHallName,
      studSeats,
      studImages: [studimg1, studimg2, studimg3],
      studDes,
        
    })
    
    try {
          await newstudio.save()
          res.send('New Studio Added Successfully')
    } catch (error) {
          return res.status(400).json({ error });
    }
})

const getAllStudDetails = asyncHandler(async (req, res) => {
    const studio = await Studio.find({})
    res.json(studio)
})

const getStudDetailsById = asyncHandler(async (req, res) => {
    const studio = await Studio.findById(req.params.id)

    if (studio) {
          res.json({
                _id: studio._id,
                studHallName: studio.studHallName,
                studSeats: studio.studSeats,
                studDes: studio.studDes,
                studImages: studio.studImages,
                
          })
    } else {
          res.status(404)
          throw new Error('Invalid studio data')
    }
})

const updateStudDetails = asyncHandler(async (req, res) => {
    const {
        studHallName,
        studSeats,
        studDes,
        studimg1,
        studimg2,
        studimg3
    } = req.body

    const studio = await Studio.findById(req.params.id)

    if (studio) {
          studio.studHallName = studHallName
          studio.studSeats = studSeats
          studio.studDes = studDes
          studio.studImages = [studimg1, studimg2, studimg3]
          const updateStudio = await studio.save()
          res.json(updateStudio)


    } else {

          res.status(404)
          throw new Error('Invalid studio data')

    }
})

const deleteStudDetails = asyncHandler(async (req, res) => {
    const studio = await Studio.findById(req.params.id)

    if (studio) {
          await studio.remove()
          res.json({ message: 'Studio Details removed' })
    } else {
          res.status(404)
          throw new Error('Studio details not found')
    }

})

export { insertStudio, getAllStudDetails, getStudDetailsById, updateStudDetails, deleteStudDetails }