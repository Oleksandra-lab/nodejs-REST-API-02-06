const Joi = require("joi");

const addSchema = Joi.obj({
    name: Joi.sting().required(),
    email: Joi.string().required(), 
    phone: Joi.string().required(),
  })

  module.exports = {
    addSchema,
  }