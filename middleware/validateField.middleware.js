const Joi = require("joi");

const validateMiddleware = (req, res, next) => {
  const schemaRegister = Joi.object({
    firstName: Joi.string().min(3).max(255).required(),
    lastName: Joi.string().min(3).max(255),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  const { error } = schemaRegister.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

module.exports = validateMiddleware;
