const { createService, updateService } = require('../services/motorsServices');
const { HTTP_SERVER_ERROR } = require('../status');

const createController = async (req, res) => {
	try {
		const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
		const { isCreated, code } = await createService({ marca, modelo, versao, ano, quilometragem, observacao });

		return res.status(code).json({ isCreated });
	} catch (e) {
		return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
	}
};

const updateController = async (req, res) => {
	try {
		const { id } = req.params;
		const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
		const { data, code } = await updateService({ id, marca, modelo, versao, ano, quilometragem, observacao });
		return res.status(code).json(data);
	} catch (e) {
		return res.status(HTTP_SERVER_ERROR).json({ message: e.message });
	}
};

module.exports = {
	createController,
	updateController,
};