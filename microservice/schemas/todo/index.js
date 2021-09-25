const _yup = require('yup')

const createTodoSchema = _yup.object({
  todo: _yup.string().required('Todo is required.'),
  status: _yup.bool().nullable().notRequired(),
})

const updateTodoSchema = _yup.object({
  todo: _yup.string().nullable().notRequired(),
  status: _yup.bool().nullable().notRequired(),
})

module.exports = {
  createTodoSchema,
  updateTodoSchema,
}
