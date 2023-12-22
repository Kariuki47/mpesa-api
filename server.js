const express = require('express');
const cors = require("cors");
require('dotenv').config()

// initialise exxpress
const app = express()

// express middleware that convert request body to JSON.
app.use(express.json())
app.use(cors())

// import routes
const lipaNaMpesaRoutes = require("./routes/routes.lipanampesa.js")
app.use('/api',lipaNaMpesaRoutes)

const port = process.env.PORT | 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})



