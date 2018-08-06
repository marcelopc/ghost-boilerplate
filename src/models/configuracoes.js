/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('configuracoes', {
		idconfiguracoes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cor_primaria: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_secundaria: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_icone_mapa: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_icone_atividades: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_icone_destino: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_icone_sac: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_icone_faq: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_icone_conta: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_icone_reservas: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_icone_aviso: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_texto: {
			type: DataTypes.STRING(6),
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
		cor_topbar: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_iconetopbar: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_textotopbar: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_bar: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_border: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_textobotao: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_fundobotao: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_icone_empresa: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_atividades: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_icone_conta: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_icone_destino: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_icone_empresa: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_icone_faq: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_icone_mapa: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_icone_reservas: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_icone_sac: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_splash: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_login: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_atracao: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_atracao: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_bar_restaurante: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_bar_restaurante: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_perfil_user: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_user_cover: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_dados: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_dados: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_pools: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_pools: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_icone_parque: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_parque: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_logo_splash: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_frnh: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_frnh: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_checkin: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_checkin: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_checkout: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_checkout: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_extrato: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_extrato: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		image_icone_reservacheckin: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_reservacheckin: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_governanca: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_governanca: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		cor_icone_pdv: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_pdv: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_manutencao: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_manutencao: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_cotas: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_cotas: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_ingressos: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_ingressos: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cor_icone_pesquisa: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		image_icone_pesquisa: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		logo_principal_tamanho: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		logo_principal_altura: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'configuracoes'
	});
};
