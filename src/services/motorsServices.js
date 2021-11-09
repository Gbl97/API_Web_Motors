const { createModel } = require('../models/motorsModel');
const { HTTP_CREATED } = require('../status');

const createService = async ({ marca, modelo, versao, ano, quilometragem, observacao }) => {
	const { isCreated } = await createModel({ marca, modelo, versao, ano, quilometragem, observacao });

	return { isCreated, code: HTTP_CREATED };
};

module.exports = {
	createService
};