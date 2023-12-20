const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .required()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": "missing required phone field" }),
});

const updateSchema = Joi.object({
  name: Joi.string(),

  email: Joi.string(),

  phone: Joi.string(),
});

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().required()
})
module.exports = {
  addSchema,
  updateSchema,
  updateStatusSchema,
};
