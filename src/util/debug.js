var debug = require('debug');

module.exports = (tag, message)=>{
    console.log('hahah')
    return debug(tag)(message)

};
  