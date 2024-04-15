import Skincare from '../models/skincareModel.js'
import asyncHandler from 'express-async-handler'

const getSkincares = asyncHandler(async (req, res) => {
  const skincare = await Skincare.find({})
  res.json(skincare)
})

const getSkincarebyID = asyncHandler(async (req, res) => {
  const skincare = await Skincare.findById(req.params.id)

  if (skincare) {
    res.json({
      _id: skincare._id,
      name: skincare.name,
      description: skincare.description,
      price: skincare.price,
      category: skincare.category,
      image: skincare.image,

    })
  } else {
    res.status(404)
    throw new Error('skincare not found')
  }
})

const createSkincare = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    image,

  } = req.body
  const newskincare = await Skincare({
    name,
    description,
    price,
    category,
    image,

  })
  try {
    await newskincare.save()
    res.send('Skincare Added Successfully')
  } catch (error) {
    return res.status(400).json({ error });
  }
})


const deleteSkincare = asyncHandler(async (req, res) => {
  const skincare = await Skincare.findById(req.params.id)

  if (skincare) {
    await skincare.remove()
    res.json({ message: 'item removed' })
  } else {
    res.status(404)
    throw new Error('Item not found')
  }
})

const updateSkincare = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    image,

  } = req.body

  const skincares = await Skincare.findById(req.params.id)

  if (skincares) {
    skincares.name = name,
    skincares.description = description,
    skincares.price = price,
    skincares.category = category,
    skincares.image = image

    const updateSkincare = await skincares.save()
    res.json(updateSkincare)
  } else {
    res.status(404)
    throw new Error('Skincare Item Not found')
  }


})

export { getSkincares, getSkincarebyID, createSkincare, deleteSkincare, updateSkincare }