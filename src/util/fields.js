'use strict';

exports.mapValueFieldNames = function(dataValues, fields, Model) {
	
  const values = {};

  for (const attr of fields) {
    if (dataValues[attr] !== undefined && !Model._isVirtualAttribute(attr)) {
      // Field name mapping
      if (Model.rawAttributes[attr] && Model.rawAttributes[attr].field && Model.rawAttributes[attr].field !== attr) {
        values[Model.rawAttributes[attr].field] = dataValues[attr];
      } else {
        values[attr] = dataValues[attr];
      }
    }
  }

  return values;

};

exports.removeFieldUndefineds = function(object) {

	Object.keys(object).forEach(key => object[key] === undefined ? delete object[key] : '');
	return object;

};