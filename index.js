const { join } = require('path')

const express = require('express')

const { sign } = require('./controller/jwt')

const app = express()

app.use((req, res, next) => {
    sign((token) => {
        res.cookie('firebaseCustomToken', token)
        next()
    })
})

app.use( express.static(join(__dirname, "public")))

const PORT = process.env.PORT || '80'

app.listen( PORT , () => {
    console.log('server listening on ' + PORT + "...")
})