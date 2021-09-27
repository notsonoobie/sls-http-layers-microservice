const { parseString } = require('xml2js')
const { _500Message, _403Message } = require('../common/messages/messages')

const bodyParser = async function (event, context) {
  try {
    let { body } = event
    let reg = /(<|>)/g
    if (body.match(reg) || JSON.stringify(event.queryStringParameters).match(reg)) {
      context.end()
      return _403Message()
    }
    const contentType = event.headers['Content-Type']
    if (body) {
      if (contentType === 'application/xml') {
        body = await new Promise((res, rej) =>
          parseString(body, { explicitArray: false }, (err, result) => {
            if (err) rej(err)
            res(result)
          }),
        )
      } else if (contentType === 'application/json') {
        body = JSON.parse(body)
      }
      event.body = body
      event.headers['Content-Type'] = 'application/json'
    }
  } catch (error) {
    context.end()
    return _500Message()
  }
}

module.exports = {
  bodyParser,
}
