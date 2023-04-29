const joi = require("joi");

//content validations
const validateContent = joi.object({
  brand: joi.string().required(),
  status: joi.boolean(),
  title: joi.string().required(),
  img: joi.string().required(),
  desc: joi.string().required(),
});

// Pricing update validation
const validateUpdateContent = joi.object({
  brand: joi.string().required(),
  status: joi.boolean(),
  title: joi.string(),
  img: joi.string(),
  desc: joi.string(),
});

module.exports = { validateContent, validateUpdateContent };
