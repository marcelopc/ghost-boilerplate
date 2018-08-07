var debug = require('debug');

module.exports = (tag, message)=>{
    return debug(tag)(message)
};
  