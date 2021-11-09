const { createModel, updateModel } = require('../models/motorsModel');
const { HTTP_CREATED, HTTP_OK_STATUS } = require('../status');

const createService = async ({ marca, modelo, versao, ano, quilometragem, observacao }) => {
	const { isCreated } = await createModel({ marca, modelo, versao, ano, quilometragem, observacao });

	return { isCreated, code: HTTP_CREATED };
};

const updateService = async ({ id, marca, modelo, versao, ano, quilometragem, observacao }) => {
	const result  = await updateModel({ id, marca, modelo, versao, ano, quilometragem, observacao });

	return { data: result, code: HTTP_OK_STATUS };
};

module.exports = {
	createService,
	updateService
};