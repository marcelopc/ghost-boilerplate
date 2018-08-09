'use strict';

export function newError(code = 400, message = "Erro interno no Servidor", arrayErros = []) {

	if(typeof code === 'string') code = parseInt(code);

	let erro = new Error(message);
	erro.code = code;
	erro.arrayErros = arrayErros;
	return erro;

}

export function fieldExistent(arrayErros) {

	if(!arrayErros || !arrayErros.length)
		return;

	return arrayErros.map((item)=>{
		if(!item.value) item.value = 'Generico';
		if(!item.path) item.path = 'Generico';

		return {
			erro: `${item.value} já existe`,
			path: item.path.replace('_UNIQUE', ''),
			value: item.value
		};
	});

}

export function fieldNotNull(arrayErros) {

	if(!arrayErros || !arrayErros.length)
		return;

	return arrayErros.map((item)=>{
		return {
			erro: `${item.path} não informado`,
			path: item.path
		};
	});

}

export function validateFieldExistent(erro) {

	if(!erro) return false;

	if(erro.parent && erro.parent.errno === 1062){
		return true;
	}else{
		return false;
	}

}

export function validateFieldNotNull(erro) {

	if(!erro) return false;

	if(erro.name === "SequelizeValidationError"){
		return true;
	}else{
		return false;
	}

}

export function validateForeignKeyInvalid(erro) {

	if(!erro) return false;

	if(erro.name === "SequelizeForeignKeyConstraintError"){
		return true;
	}else{
		return false;
	}

}

export function validateValueInvalid(erro) {

	if(!erro) return false;

	if(erro.name === "SequelizeDatabaseError"){
		return true;
	}else{
		return false;
	}

}

export function uniqueConstraintError(erro) {

	if(!erro) return false;

	if(erro.name === "SequelizeUniqueConstraintError"){
		return true;
	}else{
		return false;
	}

}
