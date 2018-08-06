/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('posts', {
		idposts: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		titulo: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		post: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		categoria: {
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
		cover: {
			type: DataTypes.STRING(100),
			allowNull: true
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
		usuarios_idusuarios: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'usuarios',
				key: 'idusuarios'
			}
		},
		status: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'ativo'
		},
		destacar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'posts'
	});
};
