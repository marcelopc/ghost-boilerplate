/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('grupoempresas_has_clientes', {
		grupoempresas_idgrupoempresas: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'grupoempresas',
				key: 'idgrupoempresas'
			}
		},
		clientes_idclientes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'clientes',
				key: 'idclientes'
			}
		},
		ultimologin: {
			type: DataTypes.DATE,
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'grupoempresas_has_clientes'
	});
};
