const connection = require('./mysql_connection');

const createModel = async ({ marca, modelo, versao, ano, quilometragem, observacao }) => {
	const query = `INSERT INTO tb_AnuncioWebmotors (marca, modelo, versao, ano, quilometragem, observacao )
  VALUES (?,?,?,?,?,?)`;

	await connection.execute(query, [marca, modelo, versao, ano, quilometragem, observacao]);

	return { isCreated: true };
};

module.exports = {
	createModel,
};