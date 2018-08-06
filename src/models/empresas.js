/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('empresas', {
		idempresas: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: DataTypes.STRING(50),
			allowNull: false
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
		grupoempresas_idgrupoempresas: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'grupoempresas',
				key: 'idgrupoempresas'
			}
		},
		configuracoes_idconfiguracoes: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'configuracoes',
				key: 'idconfiguracoes'
			}
		},
		shortlogo: {
			type: DataTypes.STRING(100),
			allowNull: true
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
		tipo: {
			type: DataTypes.STRING(45),
			allowNull: false,
			defaultValue: 'hotel'
		},
		artigo: {
			type: DataTypes.STRING(1),
			allowNull: true,
			defaultValue: 'a'
		}
	}, {
		tableName: 'empresas'
	});
};
