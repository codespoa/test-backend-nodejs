const yup = require('../../lib/yup');

module.exports = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  role: yup.string().oneOf(['admin', 'user']),
});
