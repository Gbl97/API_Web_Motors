const connection = require('./mysql_connection');

const createModel = async ({ marca, modelo, versao, ano, quilometragem, observacao }) => {
	const query = `INSERT INTO tb_AnuncioWebmotors (marca, modelo, versao, ano, quilometragem, observacao )
  VALUES (?,?,?,?,?,?)`;

	await connection.execute(query, [marca, modelo, versao, ano, quilometragem, observacao]);

	return { isCreated: true };
};

const readAllModel = async () => {
	const query = 'SELECT * FROM tb_AnuncioWebmotors';

	const [[result]] = await connection.execute(query);

	return result;
};

const readByIdModel = async (id) => {
	const query = 'SELECT * FROM tb_AnuncioWebmotors WHERE id=?';

	const [[result]] = await connection.execute(query, [id]);

	return result;
};

const updateModel = async ({ id, marca, modelo, versao, ano, quilometragem, observacao }) => {
	const queryUp = `UPDATE tb_AnuncioWebmotors SET Marca=?, Modelo=?,Versao=?, Ano=?, 
  Quilometragem=?, Observacao=?
  WHERE ID=?`;

	const queryGetId = 'SELECT * FROM tb_AnuncioWebmotors WHERE id=?';

	await connection.execute(queryUp, [marca, modelo, versao, ano, quilometragem, observacao, id]);

	const [[result]] = await connection.execute(queryGetId, [id]);

	return result;
};

const deleteModel = async (id) => {
	const query = 'DELETE FROM tb_AnuncioWebmotors WHERE id=?';

	await connection.execute(query, [id]);

	return { isDeleted: true };
};

module.exports = {
	createModel,
	readAllModel,
	readByIdModel,
	updateModel,
	deleteModel
};