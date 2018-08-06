/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('paises', {
		idpaises: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		sigla: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		lingua: {
			type: DataTypes.STRING(5),
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
		tableName: 'paises'
	});
};
