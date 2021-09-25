const bcrypt = require('bcrypt')

const hashPassword = (pwd, rounds = process.env.SALT_ROUNDS) => {
  if (!pwd) return Promise.reject('Bad request.')
  return new Promise((res, rej) => {
    bcrypt.hash(pwd, parseInt(rounds), (err, hash) => {
      if (err) rej('Something went wrong.')
      res(hash)
    })
  })
}

const verifyPassword = (pwd, hash) => {
  if (!pwd || !hash) return Promise.reject('Bad request.')
  return new Promise((res, rej) => {
    bcrypt.compare(pwd, hash, (err, resp) => {
      if (resp !== true) rej('Unauthorized')
      res(true)
    })
  })
}

module.exports = {
  hashPassword,
  verifyPassword,
}
