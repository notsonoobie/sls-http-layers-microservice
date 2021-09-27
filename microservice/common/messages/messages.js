const _500Message = (msg) => {
  return {
    statusCode: 500,
    body: JSON.stringify({
      success: false,
      message: msg || 'Internal Server Error',
    }),
  }
}

const _401Message = (msg) => {
  return {
    statusCode: 401,
    body: JSON.stringify({
      success: false,
      message: msg || 'Unauthorized',
    }),
  }
}

const _400Message = (msg) => {
  return {
    statusCode: 400,
    body: JSON.stringify({
      success: false,
      message: msg || 'Bad Request',
    }),
  }
}

const _403Message = (msg) => {
  return {
    statusCode: 403,
    body: JSON.stringify({
      success: false,
      message: msg || 'Forbidden',
    }),
  }
}

const _404Message = (msg) => {
  return {
    statusCode: 404,
    body: JSON.stringify({
      success: false,
      message: msg || 'Not Found',
    }),
  }
}

const _200Message = (msg) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      data: msg || 'Ok',
    }),
  }
}

const _201Message = (msg) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      success: true,
      data: msg || 'Ok',
    }),
  }
}

module.exports = {
  _500Message,
  _401Message,
  _400Message,
  _404Message,
  _200Message,
  _201Message,
  _403Message,
}
