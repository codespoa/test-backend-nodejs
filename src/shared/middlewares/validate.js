const objectIsNotEmpty = require('../utils/objectIsNotEmpty');

const validate = (schema) => async (req, res, next) => {
  try {
    const { method } = req;

    const validateOptions = {
      abortEarly: false,
      stripUnknown: true,
      recursive: true,
    };

    switch (true) {
      case method === 'POST':
        req.body = await schema.validate(req.body, validateOptions);
        break;

      case method === 'PUT' && objectIsNotEmpty(req.body):
        req.body = await schema.validate(req.body, validateOptions);
        break;

      case method === 'PUT' && objectIsNotEmpty(req.params):
        req.params = await schema.validate(req.params, validateOptions);
        break;

      case method === 'GET' && objectIsNotEmpty(req.query):
        req.query = await schema.validate(req.query, validateOptions);
        break;

      case method === 'GET' && objectIsNotEmpty(req.params):
        req.params = await schema.validate(req.params, validateOptions);
        break;

      case method === 'DELETE':
        req.params = await schema.validate(req.params, validateOptions);
        break;

      default:
        req.body = await schema.validate(req.body, validateOptions);
        break;
    }

    return next();
  } catch (errors) {
    const validationErrors = {};
    console.log(errors);
    if (errors.inner) {
      errors.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });

      return res.status(400).json(validationErrors);
    }

    return res.status(500).json({ errors });
  }
};

module.exports = validate;
