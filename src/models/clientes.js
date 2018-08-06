/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('clientes', {
		idclientes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		sobrenome: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: true,
			unique: true
		},
		sexo: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		dataNascimento: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		enderecos_idenderecos: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'enderecos',
				key: 'idenderecos'
			}
		},
		senha: {
			type: DataTypes.STRING(44),
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
		status: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'ativo'
		},
		telefone: {
			type: DataTypes.STRING(15),
			allowNull: true,
			unique: true
		},
		cpf: {
			type: DataTypes.STRING(11),
			allowNull: true,
			unique: true
		},
		facebook_token: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		facebook_userid: {
			type: DataTypes.STRING(25),
			allowNull: true,
			unique: true
		},
		facebook_sessionkey: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		facebook_expires: {
			type: DataTypes.DATE,
			allowNull: true
		},
		avatar: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		profissao: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		rg: {
			type: DataTypes.STRING(8),
			allowNull: true,
			unique: true
		},
		passaporte: {
			type: DataTypes.STRING(8),
			allowNull: true,
			unique: true
		}
	}, {
		tableName: 'clientes'
	});
};
