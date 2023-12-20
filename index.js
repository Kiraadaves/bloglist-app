const config = require("./utils/config")
const logger = require("./utils/logger")
const express = require("express")
const app = express()
const blogRouter = require('./controllers/bloglist')


app.use(express.json())
app.use('/api/blogs', blogRouter)

app.listen(config.PORT, () => {
  logger.info(`Server is currently running on port: ${config.PORT} for ${config.MONGODB_URI}`)
})
logger.info(`Why isnt this working?`)