import mongoose from 'mongoose'

const tableBookingSchema = mongoose.Schema({
     
      
      userid: {
            type: String,
            required: true
      },

      packageid: {
            type: String,
            required: true,     
      },

      userName:{
            type:String,
            required: true
      },

      packageName:{
            type: String,
            required: true
      },
     
      date: {
            type: String,
            required: true,
      },

      phoneNo: {
            type: String,
            required: true,
      },

      adults: {
            type: Number,
            required: true,
      },

      childrens: {
            type: Number,
            required: true,
      },

      time: {
            type: String,
            required: true,
      },
      
      status: {
            type: String,
            required: true,
            default: 'booked'
      },
     

}, {
      timestamps: true
})

const TBookings = mongoose.model('glamBookings', tableBookingSchema)

export default TBookings