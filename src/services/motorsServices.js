const { createModel, updateModel, readAllModel, readByIdModel, deleteModel } = require('../models/motorsModel');
const { HTTP_CREATED, HTTP_OK_STATUS, HTTP_NO_CONTENT } = require('../status');

const createService = async ({ marca, modelo, versao, ano, quilometragem, observacao }) => {
	const { isCreated } = await createModel({ marca, modelo, versao, ano, quilometragem, observacao });

	return { isCreated, code: HTTP_CREATED };
};

const readAllService = async () => {
	const result = await readAllModel();

	return { data: result, code: HTTP_OK_STATUS };
};

const readByIdService = async (id) => {
	const result = await readByIdModel(id);

	return { data: result, code: HTTP_OK_STATUS };
};

const updateService = async ({ id, marca, modelo, versao, ano, quilometragem, observacao }) => {
	const result  = await updateModel({ id, marca, modelo, versao, ano, quilometragem, observacao });

	return { data: result, code: HTTP_OK_STATUS };
};

const deleteService = async (id) => {
	const { isDeleted } = await deleteModel(id);

	return { isDeleted, code: HTTP_NO_CONTENT };
};

module.exports = {
	createService,
	readAllService,
	readByIdService,
	updateService,
	deleteService
};