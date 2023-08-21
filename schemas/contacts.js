const Joi = require("joi");

const subscriptionTypes = ["starter", "pro", "business"];

const addSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^[(]?[0-9]{3}[)]?[\s][0-9]{3}[-][0-9]{4}$/),
  favorite: Joi.boolean(),
});

const updateFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const updateSubscription = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionTypes)
    .required(),
});

module.exports = {
  addSchema,
  updateFavorite,
  authSchema,
  updateSubscription,
};
