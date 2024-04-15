import mongoose from 'mongoose'

const skincareSchema = mongoose.Schema({

   
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    category:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
   
}, {
    timestamps: true
})

const Skincare = mongoose.model('skincare', skincareSchema)
 
export default Skincare
