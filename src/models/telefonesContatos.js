/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('telefones_contatos', {
		idtelefones: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		telefone: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
		tipo: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'comercial'
		},
		whatsapp: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
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
		descricao: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'telefones_contatos'
	});
};
