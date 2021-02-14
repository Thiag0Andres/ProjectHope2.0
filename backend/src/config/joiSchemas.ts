import { Joi } from "celebrate";

class Schemas {
  // Users
  createUserSchema = {
    body: Joi.object().keys({
      name: Joi.string().messages({
        "string.base": `"Name" should be a type of string`,
        "string.empty": `"Name" can't be empty`,
        "any.required": `"Name" is required`,
      }),
      email: Joi.string().email().required().messages({
        "string.base": `"Email" should be a type of string`,
        "string.empty": `"Email" can't be empty`,
        "string.email": `"Email" isn't an valid email`,
        "any.required": `"Email" is required`,
      }),
      password: Joi.string().min(6).required().messages({
        "string.base": `"Password" should be a type of string`,
        "string.empty": `"Password" can't be empty`,
        "string.min": `"Password" must have at least 6 digits`,
        "any.required": `"Password" is required`,
      }),
      image_url: Joi.string().uri().messages({
        "string.base": `"Image url" should be a type of string`,
        "string.empty": `"Image url" can't be empty`,
        "string.uri": `"Image url" is not a valid url`,
      }),
      user_type: Joi.string().required().messages({
        "string.base": `"User type" should be a type of string`,
        "string.empty": `"User type" can't be empty`,
        "any.required": `"User type" is required`,
      }),
      relationship_drugs: Joi.string().messages({
        "string.base": `"Relationship with drugs" should be a type of string`,
        "string.empty": `"Relationship with drugs" can't be empty`,
      }),
      relationship_family: Joi.string().messages({
        "string.base": `"Relationship with family url" should be a type of string`,
        "string.empty": `"Relationship with family url" can't be empty`,
      }),
      time_without_drugs: Joi.string().messages({
        "string.base": `"Time without drugs" should be a type of string`,
        "string.empty": `"Time without drugs" can't be empty`,
      }),
      age: Joi.number().messages({
        "number.base": `"Age" should be a type of number`,
        "number.empty": `"Age" can't be empty`,
      }),
    }),
  };

  authenticateUserSchema = {
    body: Joi.object().keys({
      email: Joi.string().email().required().messages({
        "string.base": `"Email" should be a type of string`,
        "string.empty": `"Email" can't be empty`,
        "string.email": `"Email" isn't an valid email`,
        "any.required": `"Email" is required`,
      }),
      password: Joi.string().min(6).required().messages({
        "string.base": `"Password" should be a type of string`,
        "string.empty": `"Password" can't be empty`,
        "string.min": `"Password" must have at least 6 digits`,
        "any.required": `"Password" is required`,
      }),
    }),
  };
}

export default new Schemas();
