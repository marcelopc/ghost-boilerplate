const db = require('./models');
const db33 = require('./models');
var debug = require('debug')('server');

let teste = (item) => {
    return [...item, [1,2]];
};