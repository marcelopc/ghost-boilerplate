/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('recoverypass', {
		idrecoverypass: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		code: {
			type: DataTypes.STRING(64),
			allowNull: false,
			unique: true
		},
		datalimite: {
			type: DataTypes.DATE,
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
		tipousuario: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		utilizado: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'recoverypass'
	});
};
