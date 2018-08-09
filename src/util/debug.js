var debug = require('debug');

module.exports = (tag, message)=>{

    if(!tag) return;
    if(!message) return;

    return debug(tag)(message);
};
