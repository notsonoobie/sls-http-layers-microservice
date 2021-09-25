const _yup = require('yup')

const loginSchema = _yup.object({
  email: _yup.string().required('Email is required.').email('Email is invalid'),
  password: _yup
    .string()
    .required('Password is required.')
    .min(6, 'Password is too short.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      'Password must includes atleast one Uppercase, one Lowercase, one Number and one special case Character',
    ),
})

const registrationSchema = _yup.object({
  email: _yup.string().required('Email is required.').email('Email is invalid'),
  name: _yup.string().required('Name is required.'),
  password: _yup
    .string()
    .required('Password is required.')
    .min(6, 'Password is too short.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      'Password must includes atleast one Uppercase, one Lowercase, one Number and one special case Character',
    ),
})

module.exports = {
  loginSchema,
  registrationSchema,
}
