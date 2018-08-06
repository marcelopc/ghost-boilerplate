/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cidades', {
		idcidades: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		estados_idestados: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'estados',
				key: 'idestados'
			}
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		idclimatempo: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		uber: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'cidades'
	});
};
