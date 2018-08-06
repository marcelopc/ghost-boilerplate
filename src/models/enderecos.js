/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('enderecos', {
		idenderecos: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		endereco: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		referencia: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		cep: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		bairro: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		cidades_idcidades: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cidades',
				key: 'idcidades'
			}
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		tableName: 'enderecos'
	});
};
