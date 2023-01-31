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
  try {
    const result = await contentService.getContents();
    if (!result) throw StatusError("No contents found!", 404);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something went wrong",
      error,
    });
  }
};

// @desc    Create New Pricing.
// @route   POST /pricings
// @access  Private
exports.createContent = async (req, res) => {
  try {
    //creating validation
    const { error, value } = validateContent.validate(req.body);
    if (error) throw StatusError(error.message, 400);
    //create
    const result = await contentService.createContent(value);
    res.status(201).send({ message: "Pricing added successfully" });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something went wrong",
      error,
    });
  }
};

// @desc    Get Single Pricing
// @route   GET /pricings/:id
// @access  Public
exports.getContent = async (req, res) => {
  try {
    const result = await contentService.getContent(req.params.id);
    if (!result) throw StatusError("Contents not found!", 404);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something went wrong",
      error,
    });
  }
};

// @desc    Update Pricing
// @route   PUT /pricings/:id
// @access  Private
exports.updateContent = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something went wrong",
      error,
    });
  }
};

// @desc    Delete Plan
// @route   DELETE /plans/:id
// @access  Private
exports.deleteContent = async (req, res) => {
  try {
    if (!req.params.id) throw StatusError("Required id not found", 400);
    const result = await contentService.deleteContent(req.params.id);
    if (!result) throw StatusError("No contents found!", 404);
    res.status(200).send({
      message: "Content deleted successfully !",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something went wrong",
      error,
    });
  }
};
