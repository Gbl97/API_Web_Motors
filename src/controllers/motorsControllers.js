const { createService } = require('../services/motorsServices');
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

module.exports = {
	createController
};