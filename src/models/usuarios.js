/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuarios', {
		idusuarios: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usuario: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true
		},
		nome: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		sobrenome: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		senha: {
			type: DataTypes.STRING(44),
			allowNull: false
		},
		permisao: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'usuario'
		},
		status: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'ativo'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true
		},
		grupoempresas_idgrupoempresas: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'grupoempresas',
				key: 'idgrupoempresas'
			}
		}
	}, {
		tableName: 'usuarios'
	});
};
