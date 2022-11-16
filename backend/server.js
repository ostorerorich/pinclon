import express from 'express'
import { config } from 'dotenv'
config()

import { PostRouter } from './src/routes/Post.route.js'

const app = express()

app.use('/api', PostRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log('sv up')   
})