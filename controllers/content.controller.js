const { StatusError } = require("../utils/statusError");
const contentService = require("../services/content.service");
const {
  validateUpdateContent,
  validateContent,
} = require("../utils/validations/content.validation");

// @desc    Create New Pricing.
// @route   POST /pricings
// @access  Private
exports.getContents = async (req, res) => {
  const result = await contentService.getContents();
  if (!result) throw StatusError("No contents found!", 404);
  res.status(200).send(result);
};

// @desc    Create New Pricing.
// @route   POST /pricings
// @access  Private
exports.createContent = async (req, res) => {
  //creating validation
  const { error, value } = validateContent.validate(req.body);
  if (error) throw StatusError(error.message, 400);
  //create
  const result = await contentService.createContent(value);
  res.status(201).send({ message: "Pricing added successfully" });
};

// @desc    Get Single Pricing
// @route   GET /pricings/:id
// @access  Public
exports.getContent = async (req, res) => {
  const result = await contentService.getContent(req.params.id);
  if (!result) throw StatusError("Contents not found!", 404);
  res.status(200).send(result);
};

// @desc    Update Pricing
// @route   PUT /pricings/:id
// @access  Private
exports.updateContent = async (req, res) => {
  // Check pricing exists
  const contentId = req.params.id;
  if (!contentId) throw StatusError("Content id not found!", 404);
  // Update Validation
  const { error, value } = validateUpdateContent.validate(req.body);
  if (error) throw StatusError(error.message, 400);
  // Update
  const result = await contentService.updateContent(req.params, value);
  if (!result) throw StatusError("Content not found!", 404);
  res.status(200).send({
    message: "Content updated successfully",
    result,
  });
};

// @desc    Delete Plan
// @route   DELETE /plans/:id
// @access  Private
exports.deleteContent = async (req, res) => {
  if (!req.params.id) throw StatusError("Required id not found", 400);
  const result = await contentService.deleteContent(req.params.id);
  if (!result) throw StatusError("No contents found!", 404);
  res.status(200).send({
    message: "Content deleted successfully !",
    result,
  });
};
