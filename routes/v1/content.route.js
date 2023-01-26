const express = require("express");
const router = express.Router();
const contentController = require("../../controllers/content.controller");

router
  .route("/")
  .get(contentController.getAllContents)
  .post(contentController.createContent);

router
  .route("/:id")
  .get(contentController.getContentById)
  .put(contentController.updateContent)
  .delete(contentController.deleteContent);

module.exports = router;
