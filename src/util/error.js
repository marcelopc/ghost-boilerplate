'use strict';

exports.newError = function(code = 400, message = "Erro interno no Servidor", arrayErros) {

	if(typeof code === 'string') code = parseInt(code)

	let erro = new Error(message);
	erro.code = code;
	erro.arrayErros = arrayErros;
	return erro;

};

exports.fieldExistent = function(arrayErros) {

	if(!arrayErros || !arrayErros.length)
		return;

	return arrayErros.map((item)=>{
		if(!item.value) item.value = 'Generico'
		if(!item.path) item.path = 'Generico'

		return {
			erro: `${item.value} já existe`,
			path: item.path.replace('_UNIQUE', ''),
			value: item.value
		};
	});

};

exports.fieldNotNull = function(arrayErros) {

	if(!arrayErros || !arrayErros.length)
		return;

	return arrayErros.map((item)=>{
		return {
			erro: `${item.path} não informado`,
			path: item.path
		};
	});

};

exports.validateFieldExistent = function(erro) {

	if(!erro) return false

	if(erro.parent && erro.parent.errno === 1062){
		return true;
	}else{
		return false;
	}

};

exports.validateFieldNotNull = function(erro) {

	if(!erro) return false

	if(erro.name === "SequelizeValidationError"){
		return true;
	}else{
		return false;
	}

};

exports.validateForeignKeyInvalid = function(erro) {

	if(!erro) return false

	if(erro.name === "SequelizeForeignKeyConstraintError"){
		return true;
	}else{
		return false;
	}

};

exports.validateValueInvalid = function(erro) {

	if(!erro) return false

	if(erro.name === "SequelizeDatabaseError"){
		return true;
	}else{
		return false;
	}

};

exports.uniqueConstraintError = function(erro) {

	if(!erro) return false

	if(erro.name === "SequelizeUniqueConstraintError"){
		return true;
	}else{
		return false;
	}

};
