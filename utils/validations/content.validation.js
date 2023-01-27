const joi = require("joi");

//content validations
const validateContent = joi.object({
  title: joi.string().required(),
  img: joi.string().required(),
  desc: joi.string().required(),
});

// Pricing update validation
const validateUpdateContent = joi.object({
  title: joi.string(),
  img: joi.string(),
  desc: joi.string(),
});

module.exports = { validateContent, validateUpdateContent };
