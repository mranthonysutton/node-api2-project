const express = require("express");
const blogRouter = require("./blog-routes");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
      <h2>Blog Posts API Running...</h>
    `);
});

server.use("/api/posts", blogRouter);

module.exports = server;
