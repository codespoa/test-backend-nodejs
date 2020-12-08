const yup = require('../../lib/yup');

module.exports = yup.object().shape({
  title: yup.string().min(3),
  description: yup.string().required(),
  price: yup.number().required(),
  category: yup.string().required(),
  status: yup.string().oneOf(['active', 'inactive', 'lacking']).default('active'),
  code: yup.string().required(),
});
