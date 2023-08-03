const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
    .required(),
});

module.exports = {
  addSchema,
};
