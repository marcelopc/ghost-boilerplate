/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('clientes_paginas', {
		idclientes_paginas: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		createdAt: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		clientes_logs_idclientes_logs: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'clientes_logs',
				key: 'idclientes_logs'
			}
		},
		pagina: {
			type: DataTypes.STRING(25),
			allowNull: false
		}
	}, {
		tableName: 'clientes_paginas'
	});
};
