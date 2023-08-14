const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^[(]?[0-9]{3}[)]?[\s][0-9]{3}[-][0-9]{4}$/),
  favorite: Joi.boolean(),
});

const updateFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  updateFavorite,
};
