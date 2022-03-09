const jwt = require('jsonwebtoken');
const config = require('./index');

const { privateKey } = config.keys;

function sign(payload, options) {
  return jwt.sign(payload, privateKey, options);
}

function decode(token) {
  try {
    const decoded = jwt.verify(token, privateKey);

    return { decoded, valid: true, expired: false };
  } catch (error) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null,
    };
  }
}

module.exports = {
  sign,
  decode,
};
