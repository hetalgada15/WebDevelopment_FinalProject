import mongoose from 'mongoose'

const packageSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    tables:{
        type: Number,
        required: true,
        default: 0
    },
    phoneNo:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    images:[],
    description:{
        type: String,
        required: true,
    },
   
}, {
    timestamps: true
})

const Package = mongoose.model('package', packageSchema)

export default Package