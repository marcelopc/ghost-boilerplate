/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emails_contatos', {
		idemails: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		status: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'ativo'
		},
		empresas_idempresas: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresas',
				key: 'idempresas'
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
		},
		descricao: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'emails_contatos'
	});
};
