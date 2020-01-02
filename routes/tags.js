const express = require("express");
const fakeTags = require("../data/tags");
const fakePosts = require("../data/posts");
const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.json(fakeTags);
});

router.get("/:tagId/posts", (req, res) => {
  const tagId = Number(req.params.tagId);
  const foundPostById = fakePosts.filter(tag => tag.tag_ids.includes(tagId));
  if (!foundPostById) {
    return res.status(404).json({
      error: "Post not found"
    });
  }
  return res.json(foundPostById);
});

module.exports = router;
