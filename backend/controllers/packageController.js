import Package from '../models/packageModel.js'
import asyncHandler from 'express-async-handler'


const getPackagees = asyncHandler(async (req, res) => {
  const packagees = await Package.find({})
  res.json(packagees)
})


const getPackageById = asyncHandler(async (req, res) => {
  const packagee = await Package.findById(req.params.id)

  if (packagee) {
    res.json({
      _id: packagee._id,
      name: packagee.name,
      type: packagee.type,
      tables: packagee.tables,
      phoneNo: packagee.phoneNo,
      email: packagee.email,
      location: packagee.location,
      images: packagee.images,
      description: packagee.description,
    })

  } else {
    res.status(404)
    throw new Error('Package not found')
  }

})

const createPackage = asyncHandler(async (req, res) => {
  const {
    name,
    type,
    tables,
    phoneNo,
    email,
    location,
    image1,
    image2,
    image3,
    description
  } = req.body

  const newrest = new Package({
    name,
    type,
    tables,
    phoneNo,
    email,
    location,
    images:
      [image1,
        image2,
        image3],
    description

  })
  try {
    await newrest.save()
    res.send('New Package Added Successfully')
  } catch (error) {
    return res.status(400).json({ error });
  }
})



const deleteRest = asyncHandler(async (req, res) => {
  const rest = await Package.findById(req.params.id)

  if (rest) {
    await rest.remove()
    res.json({ message: 'Package removed' })
  } else {
    res.status(404)
    throw new Error('Package not found')
  }
})


const updatePackage = asyncHandler(async (req, res) => {

  const {
    name,
    type,
    tables,
    phoneNo,
    email,
    location,
    image1,
    image2,
    image3,
    description
  } = req.body

  const packages = await Package.findById(req.params.id)

  if (packages) {
    packages.name = name,
    packages.type = type,
    packages.tables = tables,
    packages.phoneNo = phoneNo,
    packages.email = email,
    packages.location = location,
    packages.images = [image1, image2, image3],
    packages.description = description

    const updatePackage = await packages.save()
    res.json(updatePackage)

  } else {
    res.status(404)
    throw new Error("Package Not Found")
  }

})


export { getPackagees, getPackageById, createPackage, deleteRest, updatePackage }