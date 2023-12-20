const config = require("./utils/config")
const logger = require("./utils/logger")
const express = require("express")
const app = express()
const Blog = require("./models/blog")


app.use(express.json())
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
  logger.info('Sent')
})

app.get("/api/blogs", (req, res) => {
  Blog.find({}).then(blogs => {
    res.json(blogs)
  })
})

app.post("/api/blogs/", (req, res) => {
  const blog = new Blog(req.body)
  blog.save()
    .then(result => {
    res.status(201).json(result)
  })
})

app.listen(config.PORT, () => {
  logger.info(`Server is currently running on port: ${config.PORT} for ${config.MONGODB_URI}`)
})
logger.info(`Why isnt this working?`)