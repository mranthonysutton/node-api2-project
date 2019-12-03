const express = require("express");
const router = express.Router();
const Posts = require("../data/db");

router.use(express.json());

// Returns all blog posts
router.get("/", (req, res) => {
  Posts.find()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});

// gets a specific blog post
router.get("/:id", (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      if (post.length !== 0) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});

// Finds all comments associated with a blog post
router.get("/:id/comments", (req, res) => {
  Posts.findPostComments(req.params.id)
    .then(comments => {
      if (comments.length !== 0) {
        res.status(200).json(comments);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ error: "The comments information could not be retrieved." });
    });
});

module.exports = router;
