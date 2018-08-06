/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('estados', {
		idestados: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: DataTypes.STRING(45),
			allowNull: false,
			unique: true
		},
		paises_idpaises: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'paises',
				key: 'idpaises'
			}
		},
		uf: {
			type: DataTypes.STRING(45),
			allowNull: false,
			unique: true
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
		tableName: 'estados'
	});
};
