const _yup = require('yup')

const globalFilterSchema = _yup.object({
  filters: _yup.object(),
  limit: _yup
    .number()
    .required('Limit is required.')
    .positive()
    .integer()
    .min(1)
    .max(50),
  page: _yup
    .number()
    .required('Page number is required.')
    .positive()
    .integer()
    .min(1),
  sort: _yup.object(),
})

module.exports = {
  globalFilterSchema,
}
