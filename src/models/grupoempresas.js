/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('grupoempresas', {
		idgrupoempresas: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true
		},
		nome_fantasia: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		cnpj: {
			type: DataTypes.STRING(14),
			allowNull: true
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
		enderecos_idenderecos: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'enderecos',
				key: 'idenderecos'
			}
		},
		logo: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		shortname: {
			type: DataTypes.STRING(45),
			allowNull: false,
			unique: true
		},
		shortlogo: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		configuracoes_idconfiguracoes: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'configuracoes',
				key: 'idconfiguracoes'
			}
		},
		facebook: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		twitter: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		instagram: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		youtube: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		artigo: {
			type: DataTypes.STRING(1),
			allowNull: true,
			defaultValue: 'a'
		},
		esolution_dominio: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		esolution_apikey: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'grupoempresas'
	});
};
