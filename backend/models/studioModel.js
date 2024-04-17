import mongoose from 'mongoose'

const StudioSchema = mongoose.Schema({

      studHallName: {
            type: String,
            required: true
      },
      studSeats: {
            type: String,
            required: true
      },
      studDes: {
            type: String,
            required: true
      },
      studImages: []
})

const Studio = mongoose.model('Studio', StudioSchema)

export default Studio