import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import cors from 'cors'
import path from 'path'

//routes
import roomRoutes from './routes/roomsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import packageesRoutes from './routes/packageRoutes.js'
import studioRoutes from './routes/studioRoutes.js'
import conferenceRoutes from './routes/conferenceRoutes.js'
import conInsideRoutes from './routes/conInsideRoute.js'
import uploadRoutes from './routes/uploadRoutes.js'

import bookingRoutes from './routes/bookingRoutes.js'

import skincareRoutes from './routes/skincareRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import tableBookingRoutes from './routes/tableBookingRoutes.js'

dotenv.config()

//connect database
connectDB()

const app = express()


// morgan HTTP request logger middleware for node.js
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())

//calling routes
app.use('/api/rooms', roomRoutes)
app.use('/api/users', userRoutes)
app.use('/api/packagees', packageesRoutes)
app.use('/api/studios', studioRoutes)
app.use('/api/conference', conferenceRoutes)
app.use('/api/conInside', conInsideRoutes)
app.use('/api/uploads', uploadRoutes)
app.use('/api/orders', orderRoutes)

const __dirname = path.resolve()
app.use('/images', express.static(path.join(__dirname, '/images')))
app.use('/api/booking', bookingRoutes)
app.use('/api/skincare', skincareRoutes)
app.use('/api/tableBooking', tableBookingRoutes)

//paypal id connect
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

//create port
const PORT = process.env.PORT || 6500

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} port ${PORT}`
  )
)
