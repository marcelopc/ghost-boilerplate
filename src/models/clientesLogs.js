/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('clientes_logs', {
		idclientes_logs: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		browser_nome: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		browser_versao: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		dispositivo_modelo: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		dispositivo_fabricante: {
			type: DataTypes.STRING(40),
			allowNull: true
		},
		dispositivo_tipo: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		engine: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		os_nome: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		os_versao: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		idDevice: {
			type: DataTypes.STRING(24),
			allowNull: true
		},
		idSession: {
			type: DataTypes.STRING(24),
			allowNull: true
		},
		linguagem: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		clientes_idclientes: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'clientes',
				key: 'idclientes'
			}
		},
		grupoempresas_idgrupoempresas: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'grupoempresas',
				key: 'idgrupoempresas'
			}
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
		tableName: 'clientes_logs'
	});
};
